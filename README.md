# HR Attrition & Workspace Analytics Dashboard

> Work in progress. Sections marked _(coming)_ are filled in as stages are completed.

## Features _(coming)_

## Screenshots _(coming)_

## Tech stack

- **Frontend:** React 18, Vite, Tailwind CSS, Recharts, React Router
- **Backend:** Node.js, Express (REST API)
- **Data:** CSV/JSON files loaded into memory (no database)

## Project structure

```
client/   React app (Vite)
server/   Express API
  data/     CSV/JSON data files
  scripts/  Data generation scripts
```

## Setup

Requires Node.js 20+.

```bash
npm install
cp server/.env.example server/.env
cp client/.env.example client/.env
npm run dev        # API on :4000, client on :5173
```

### Scripts

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Run server and client together         |
| `npm run build`        | Build the client for production        |
| `npm run lint`         | Lint the whole repo                    |
| `npm run format`       | Format with Prettier                   |
| `npm test`             | Run tests in all workspaces _(Stage 5)_ |

## Data _(coming)_

## API documentation _(coming)_

## Docker _(coming)_
