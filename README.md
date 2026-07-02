# Baseball Tracker

A React-powered web application for tracking visits to Major League Baseball stadiums. Users can mark stadiums as visited, add notes, filter by league or division, search stadiums, and see progress toward visiting all 30 parks.

## Features

- View all 30 MLB stadiums with team and location details
- Mark stadiums as visited and add personal notes
- Search by team, stadium, city, or state
- Filter stadium list by league and division
- Track visit progress with summary cards and a progress bar
- Data persistence using `localStorage`

## Tech Stack

- React
- Vite
- React Router DOM
- JavaScript
- CSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

- `src/App.jsx` — application routes and top-level layout
- `src/main.jsx` — React entry point
- `src/pages/Home.jsx` — landing page
- `src/pages/Tracker.jsx` — stadium tracker page
- `src/pages/Tracker.css` — tracker page styles
- `src/styles.css` — global styles
- `src/api/catalogApi.js` — API utilities (if used)

## Usage

1. Open the app in your browser.
2. Click `Go to Tracker` to open the stadium tracker.
3. Search for stadiums, check off visited parks, and add notes.
4. Your progress is saved automatically in the browser.

## Notes

- The tracker uses `localStorage`, so data persists on the same device and browser.
- Resetting the tracker clears saved stadium visits and notes.

