import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const SHEET_ID = process.env.VITE_SHEET_ID
const API_KEY = process.env.VITE_SHEETS_API_KEY

if (!SHEET_ID || !API_KEY) {
  console.error('Missing VITE_SHEET_ID or VITE_SHEETS_API_KEY env vars')
  process.exit(1)
}

const TABS = ['QB', 'RB', 'WR', 'TE', 'OC', 'OG', 'OT', 'DT', 'EDGE', 'LB', 'CB', 'SAF']

async function fetchTab(tab) {
  const range = `${tab}!A2:E200`
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(range)}?key=${API_KEY}`
  const res = await fetch(url)
  const json = await res.json()
  if (!json.values) return []
  return json.values.map(row => ({
    player:   row[0],
    position: row[1],
    season:   row[2],
    team:     row[3],
    grade:    parseFloat(row[4]),
  }))
}

const results = await Promise.all(TABS.map(fetchTab))
const data = results.flat()

fs.mkdirSync('src/data', { recursive: true })
fs.writeFileSync('src/data/playerGrades.json', JSON.stringify(data, null, 2))
console.log(`Wrote ${data.length} players across ${TABS.length} tabs`)
