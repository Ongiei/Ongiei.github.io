# Design system

## Direction

**Space → system → data → product** is the organizing idea. Product decisions connect the stages and loop back to the next definition. The homepage and index lead with hardware product work for hiring teams, while the visual format remains an editorial portfolio with a fast work index and one spatial interlude.

## Visual language

- Mineral paper `#e9eee9`, pale sheet `#f7f9f5`, deep ink `#153930`, secondary ink `#4b665e`, rules `#bbc9c0`, and signal blue `#1557dd`.
- Baskerville / Songti SC is reserved for the large thesis, page titles, and chapter openings. System sans is used for navigation, case names, descriptions, and controls. Mono is used only for index and coordinate notation.
- The scroll ruler's short Chinese chapter labels use Noto Sans SC at weight 600: upright sans-serif forms, regular cell spacing, and a slightly flattened glyph surface (84% height) give them the restrained feel of engineering annotations. The locally hosted subset covers only these labels; body copy and page headings retain their established type. Compact labels use the same face at 90% height; ruler numbers remain monospaced.
- Asymmetric editorial grids and horizontal rules organize content. The work index uses a ledger and an adjacent project reading pane. Equal project cards are avoided.
- Show the real medium: architectural spreads, physical device images, the embedded data chapters, and digital product screens. Hardware concepts use labeled AI-assisted studio renders; original renderings and actual work photographs remain distinct.

## Motion and interaction

- The home page has one optional Three.js spatial interlude. Its simple geometry abstracts the radial organization of the Dezhou exhibition centre and transitions to nodes and an interface plane. It is a navigation aid, not a claimed project rendering.
- Homepage chapters also have a drawing-scale navigation gutter on wide desktop screens. Upright Chinese letters travel with their section, unfold individually into a horizontal heading, and settle at the upper right. Earlier headings become a compact stack; labels and the rail support chapter jumps and keyboard navigation. This enhancement reserves its own space rather than covering project content.
- Below 1100px, with a coarse pointer, or with reduced motion enabled, the chapter navigation becomes a simple bottom progress line and current-section link. Motion updates only in response to scrolling or geometry changes; core content remains visible if the enhancement fails to load.
- All routes, case links, and the work index work without WebGL or animated transitions; case content and filtering require JavaScript. The interlude uses a static project image if WebGL is unavailable, on narrow screens, or under reduced motion.
- Work index filters narrow the ledger; selecting a row updates the adjacent detail pane. A direct case link remains visible. Keyboard focus and selected state are explicit.
- Same-origin page changes use a short editorial reveal where the browser supports cross-document view transitions; other browsers use normal navigation.
- Project pages stay calm so drawings and analytical charts can be read without motion. No animated diagrams, pinned case studies, or cursor effects over dense content.
- Hover reveals emphasis by color and small shifts. Reduced motion removes transitions. Mobile uses a single column with a compact selected project preview.

## Content rules

- Preserve all nine published cases across hardware, data, independent product, and architecture. The 1.85-inch assistant is removed from the site.
- The homepage leads with hardware product positioning and immediate access to the terminal case and index. Data cases state a product question and observation path before the embedded charts.
