# Featured Project Update — Bike Sharing Analysis

## What changed

- Replaced the IoT Monitoring System entry in Featured Projects with Bike Sharing Analysis.
- Bike Sharing is now project `/01`.
- Kept Hotel Location Intelligence and Food Delivery Intelligence as the next featured projects (`/02` and `/03`).
- Added a dedicated Bike Sharing dashboard-style visual in the existing cyberpunk frame.
- Added an optional `actionLabel` so this project can show `Live dashboard` while other projects retain `View case study`.
- Removed the unused IoT visual component and its selector entry.

## Files changed

- `src/data/project.ts`
- `src/section/project/project-card.tsx`
- `src/section/project/visual/project-visual.tsx`
- `src/section/project/visual/bike-sharing-visual.tsx` (new)
- `src/section/project/visual/iot-visual.tsx` (removed)

## Before running

The primary project link is set to:

`https://adyuda-dashboard-bike-share-analysis.streamlit.app`

Check that this is the current public Streamlit URL for the project. If it is different, update `href` in `src/data/project.ts`.

The chart marks in the new right-hand panel are decorative UI preview values, not exact statistics from the notebook. Replace them with real chart screenshots or calculated values when you want the portfolio to present measured findings.
