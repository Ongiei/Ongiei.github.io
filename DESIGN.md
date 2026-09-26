# Design system

## Direction

**Space → system → interface** is the organizing idea. The site reads as an editorial portfolio with a fast work index and one spatial interlude. It is built for hiring teams who should understand the range and open a case within 10–20 seconds.

## Visual language

- Mineral paper `#e9eee9`, pale sheet `#f7f9f5`, deep ink `#153930`, secondary ink `#4b665e`, rules `#bbc9c0`, and signal blue `#1557dd`.
- Baskerville / Songti SC is reserved for the large thesis, page titles, and chapter openings. System sans is used for navigation, case names, descriptions, and controls. Mono is used only for index and coordinate notation.
- Asymmetric editorial grids and horizontal rules organize content. The work index uses a ledger and an adjacent project reading pane. Equal project cards are avoided.
- Show the real medium: architectural spreads, physical device images, the embedded data chapters, and digital product screens. Image captions describe the work, not the production process.

## Motion and interaction

- The home page has one optional Three.js spatial interlude. Its simple geometry abstracts the radial organization of the Dezhou exhibition centre and transitions to nodes and an interface plane. It is a navigation aid, not a claimed project rendering.
- All routes, case links, and the work index work without WebGL or script driven animation. The interlude uses a static project image if WebGL is unavailable, on narrow screens, or under reduced motion.
- Work index filters narrow the ledger; selecting a row updates the adjacent detail pane. A direct case link remains visible. Keyboard focus and selected state are explicit.
- Same-origin page changes use a short editorial reveal where the browser supports cross-document view transitions; other browsers use normal navigation.
- Project pages stay calm so drawings and analytical charts can be read without motion. No animated diagrams, pinned case studies, or cursor effects over dense content.
- Hover reveals emphasis by color and small shifts. Reduced motion removes transitions. Mobile uses a single column with a compact selected project preview.

## Content rules

- Preserve all nine published cases across architecture, hardware, data, and digital product. No unfinished cases or internal production notes appear in public copy.
- The homepage leads with a clear positioning statement and immediate index access. The case page preserves the existing question, constraints, decisions, media, and inline dashboards.
