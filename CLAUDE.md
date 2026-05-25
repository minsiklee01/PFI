# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PFI is a football media website built with React + Tailwind CSS. The site is content-focused with mostly static data (articles, players, mock drafts). Backend is TBD — likely NestJS + Prisma + SQLite hosted on Railway, but may remain fully static if data doesn't warrant a server.

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Tech Stack

- **Frontend:** React 19, Tailwind CSS v4 (via `@tailwindcss/vite`), React Router v7, Vite 8
- **Backend (planned):** NestJS, Prisma, SQLite, hosted on Railway
- **Package manager:** npm

## Site Structure

```
/                          Home
/nfl-draft                 NFL Draft landing (filter tabs: All, Combine, Pro Days, Mocks, Big Board, Interviews)
/nfl-draft/big-board       Big Board
/nfl-draft/mocks           Mock Draft index
/nfl-draft/mocks/:id       Individual mock draft article
/nfl-draft/interviews      Interviews (videos + articles)
```

### Navigation Pattern
- Top nav bar with site-wide links; "NFL Draft" opens a **left sidebar** for sub-navigation between Big Board, Mocks, Interviews, etc.
- The NFL Draft section header has category filter pills: All | Combine | Pro Days | Mocks | Big Board | Interviews

## Page Specs

### Big Board (`/nfl-draft/big-board`)
- Vertical list of horizontal player cards
- Each card shows: rank, player name, position badge, college/team
- Clicking a card **expands it inline** (accordion, not nav) to reveal: Height, Weight, Year (e.g. RS Jr.), Age, summary blurb, "Read Full Article" external link
- Filter row at top for position: All | QB | RB | WR | TE | OT | IOL | ED | DL | LB | CB | S | ST

### Mock Drafts Index (`/nfl-draft/mocks`)
- Grid of versioned mock draft cards (e.g. 5.0, 4.0, 3.0)
- Each card: version title, short context/summary, link to full article

### Mock Draft Article (`/nfl-draft/mocks/:id`)
- Large title (e.g. "Justin Jaksa's NFL Draft 5.0")
- Context/rules blurb at top
- Ordered list of picks: pick number, player name, position, team logo
- Each pick has an expandable "Why" section (or may use an embedded iframe — TBD)

### Interviews (`/nfl-draft/interviews`)
- Mixed grid of video cards (YouTube embeds) and article cards
- Video cards show embedded YouTube player with headline below

## Data Model (Planned)

```
Article { id, title, slug, category, summary, content, publishedAt }
Player  { id, name, position, college, height, weight, year, age, articleId? }
Mock    { id, version, summary, publishedAt, picks: Pick[] }
Pick    { id, mockId, pickNumber, playerName, position, teamName, teamLogo, why }
```

Given the static nature of the content, seeding the DB or using JSON files for initial data is acceptable.

## Key Design Decisions

- The site is **content-first and mostly static** — avoid over-engineering the backend. Start with JSON/hardcoded data and add a real DB only when dynamic content (user submissions, CMS) is needed.
- **Accordion expansion** on Big Board cards (not routing to a new page per player).
- Backend recommendation: NestJS + Prisma + SQLite on Railway is reasonable. If content stays fully static, a simple JSON file or headless CMS (e.g. Contentlayer, Sanity) may be sufficient — decide before scaffolding the backend.
