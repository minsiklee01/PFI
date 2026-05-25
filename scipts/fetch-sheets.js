import fs from 'fs'
import 'dotenv/config'

const SHEET_ID = process.env.VITE_SHEET_ID
const API_KEY = process.env.VITE_SHEETS_API_KEY
const RANGE = 'Sheet1!A1:E100' // adjust to your tab name + range

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

const res = await fetch(url)
const json = await res.json()

const [, ...rows] = json.values

const data = rows.map(row => ({
  player:   row[0],
  position: row[1],
  season:   row[2],
  team:     row[3],
  grade:    parseFloat(row[4]),
}))

fs.writeFileSync('src/data/playerGrades.json', JSON.stringify(data, null, 2))
console.log(`Wrote ${data.length} player grades`)
