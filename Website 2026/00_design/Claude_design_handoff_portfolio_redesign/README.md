# Handoff: averylawrence.com Portfolio Redesign

## Overview
A redesign of Avery Lawrence's art portfolio site, averylawrence.com. The home page menu is a stack of full-width horizontal color bars (no hamburger menu). A black "averylawrence.com" bar sits at the top of every page and is the home/menu link. The site gates through a splash page ("are you my grandmother?") before reaching the portfolio. Projects can be filtered by tag (performance, animation, video, installation, photo, etc.) via a full-screen overlay opened from a +/× button. Project pages use one of three layout templates depending on media type.

## About the Design Files
The bundled file, `averylawrence-wireframes.dc.html`, is a **design reference built in HTML** — it demonstrates structure, layout, typography, color, and the tag-filter interaction (which is actually clickable/functional in this file). It is **not production code to copy directly**. The task is to **recreate these designs in whatever environment the target codebase uses** (or the most appropriate framework, if starting fresh) using that codebase's own conventions.

The file is organized as a set of labeled options grouped by area — open it in a browser to explore. It also depends on a small runtime script (`support.js`) used only for the design tool's live preview; that dependency should be ignored/dropped in the real implementation.

## Fidelity
**Mixed — treat as structural/lo-fi with a locked-in typography and color system.**
- Typography (Rubik Bold headings / IBM Plex Sans body), the black-bar-as-nav pattern, the marquee placement, the tag-filter overlay behavior, and the overall page structure are intentional and should be followed closely.
- Bar colors are a **placeholder rainbow system** (see Design Tokens) generated on a consistent oklch scale — real final colors are still open to adjustment.
- Images, captions, and body copy are **placeholders** — swap in the real project photos/video and copy.
- Tag assignments per project (e.g. "Medium Dead" → video) are the designer's placeholder guesses, not final.

## Screens / Views

### 1. Splash gate ("are you my grandmother?")
- **Purpose**: True root of the domain. Every visit lands here first.
- **Layout**: Full-viewport, black background (#111), centered column.
- **Components**:
  - Small line, top of screen, centered: "welcome to averylawrence.com" — IBM Plex Sans 500, ~13px, white at ~35% opacity (recedes).
  - Headline: "are you my grandmother?" — Rubik 800, ~36px (scale up for real viewport), white, centered, 1.2 line-height.
  - Two buttons below headline, 16px gap: **YES** (white fill, black text, 4px radius, Rubik 700) and **NO** (transparent, white 2px border, white text, Rubik 700).
  - Bottom-right corner: "skip splash →" — IBM Plex Sans, ~12px, white at ~45% opacity. Always visible.
- **Behavior**: NO → portfolio home. YES → grandmother page. "skip splash" → portfolio home directly (same as NO), for anyone who doesn't want to see the prompt again.

### 2. Grandmother page (YES path)
- **Purpose**: One page of 1990s lacrosse-player drawings, shown only via the splash's YES button.
- **Layout**: Single scrolling column, soft blue-to-green gradient background (evoking a field/sky).
- **Components**:
  - "‹ back" link, top-left, IBM Plex Sans 600, ~12px — returns to splash.
  - Heading: "as requested. love you" — Rubik 800, ~24px, dark gray (#222).
  - Stack of drawing images, each full-width within the column, ~150px+ tall placeholders (swap for real drawings), 4px radius, ~14px gap between.
- **Behavior**: No further navigation into the main portfolio from here — it's a dead-end page for grandma.

### 3. Home page (desktop)
- **Purpose**: The entire site menu. No hamburger — every "page" is a full-width horizontal bar.
- **Layout**: Fixed-height app-shell viewport (header + scrollable body), full page width.
  - Header bar: 54px tall, black, 3-column grid (44px / 1fr / 44px) — empty spacer, centered "averylawrence.com" wordmark (Rubik 800, 17px, white, this is the home link), and a circular +/× toggle button on the right (32px, white 1.5px border, transparent fill, white glyph).
  - Below the header, a scrollable list of full-width bars, top to bottom:
    1. Project bars 1–4 (color bars, one per project)
    2. **INFO marquee** — black bar, continuously scrolling row of "INFO" repeated, white Rubik 800 ~16px text, looping via CSS animation (~9s linear).
    3. Remaining project bars (13 more)
    4. **SHOP marquee** — same marquee treatment, text "SHOP"
    5. Utility bars: "teaching", "resumes/statements/etc.", "project management", "bloopers" — grayscale bars (see tokens), same typography as project bars
    6. **NEWS marquee** — same marquee treatment, text "NEWS"
    7. Search block — black background, white input field, centered "SEARCH" label below it (Rubik 700, white, ~13px, letter-spacing 1px)
  - Each project bar: 54px tall, flex row, colored background, centered title (Rubik 800, ~20px, near-black #111 text), small tag label pinned to the right edge (IBM Plex Sans 600, 10px, ~50% black).
- **Tag filter overlay**: Tapping the header's **+** button expands a full-screen (covers everything below the header) white panel titled "filter by tag" (Rubik 800, ~21px, centered). Below it, one full-width horizontal bar per tag (Performance, Animation, Video, Installation, Photo) — white fill, 2px black stroke, black Rubik 700 text, ~16px padding, 4px radius, 10px gap. Tapping a tag bar toggles it: selected = black fill / white text; unselected = white fill / black text. Multiple tags can be selected at once (OR logic). The **+** becomes **×** while open; tapping it again closes the panel. **The project bar list underneath updates live** to show only bars matching at least one selected tag; with none selected, all project bars show. Utility bars and marquees are unaffected by the filter.
- **Project order/split**: The INFO marquee sits specifically after the 4th project bar ("Team Photo") in the unfiltered order, not after a fixed count — if filtering removes bars from the first group, the marquee position holds steady at that same slot in the underlying list.

### 4. Home page (mobile)
Same structure and behavior as desktop, at a narrow (≈360–390px) width: header shrinks to 48px, toggle button to 28px, project bars to 48px tall (title only, no side tag label), marquees to 34px tall. Tag filter overlay behaves identically, just narrower.

### 5. Project page — standard split (static/photo work)
- **Layout**: Black "averylawrence.com" header bar (same home-link header as home page, no toggle button needed here) → a colored title bar matching that project's home-page bar color (title centered, Rubik 800, ~20px; tag label at right edge) → two-column body below: left column = image + caption, right column = body copy, divided by a 1px black vertical rule.
- **Components**: Image placeholder (fixed aspect box), caption line below it (IBM Plex Sans, ~13.5px, #333), body copy in the right column (same type style, multiple paragraphs).

### 6. Project page — full-bleed hero (video/performance work)
- Same header + title bar as above, then a full-width 16:9 video/image placeholder, then a single centered column of body copy below (max-width ~460px in the 560px reference card — scale proportionally), for pieces best introduced by watching before reading.

### 7. Project page — gallery grid (installation/multi-image work)
- Same header + title bar, then an intro paragraph, then a 2-column (scale to more columns on wider viewports) grid of image placeholders with consistent gap, for work best shown as a set of photos.

### 8. Project page (mobile)
- Any of the above templates stack to a single column at mobile widths: image/video placeholder full width on top, caption below it, then body copy full width below that. No side-by-side columns on mobile.

## Interactions & Behavior
- **Splash → portfolio**: NO button, or the "skip splash" link, navigate straight to the home page. YES navigates to the grandmother page.
- **Home header wordmark**: always a link back to the home page (acts as "menu" from any project page).
- **Tag filter**: toggle button opens/closes a full-screen panel; tapping tag bars multi-selects; the underlying project bar list filters live (OR across selected tags, shows all when none selected). This should be built as real interactive state (not a static mock) — the reference file already implements the toggle/select/filter logic in plain JS/state if useful as a behavioral reference.
- **Marquees**: continuous horizontal auto-scroll, looping seamlessly (duplicate the content once and animate a translateX from 0 to -50%).
- **Responsive**: layout stays full-width at every size; no hamburger menu at any breakpoint. Bars and header shrink proportionally on mobile; project-page columns collapse to a single stacked column on mobile.

## State Management
- `filterOpen` (boolean) — whether the tag-filter panel is showing.
- `selectedTags` (array of strings) — currently active tag filters; empty = show all.
- `splashSeen` / skip state — up to the implementer whether "skip splash" persists a preference or just navigates for that session; the design as specified always shows the splash but always offers the skip link.

## Design Tokens

**Typography**
- Headings: Rubik, weight 700–800 (Google Fonts: `Rubik:wght@500;700;800`)
- Body: IBM Plex Sans, weight 400–600 (Google Fonts: `IBM+Plex+Sans:wght@400;500;600`)
- Minimum body size 13.5px; headings scale from ~15px (mobile utility bars) up to ~36px (splash headline)

**Colors**
- Black bars / header / marquees: `#111111`
- White: `#ffffff`
- Project bar palette — consistent oklch scale (same lightness/chroma family, hue sweeps blue → green → yellow → orange → red → pink → purple, matching the original mockup's rainbow order): e.g. `oklch(66% 0.14 250)` through `oklch(66% 0.16 305)`. Full 17-color list is in the HTML file's `BARS` array — treat as placeholder, adjust freely.
- Utility/gray bars: `oklch(65% 0 0)`, `oklch(72% 0 0)`, `oklch(80% 0 0)`, `oklch(87% 0 0)` (dark to light)
- Tag filter panel: white background, `#111111` text/stroke; selected tag = `#111111` fill / white text

**Spacing / sizing**
- Desktop header: 54px tall; mobile header: 48px
- Desktop project bar: 54px tall; mobile: 48px
- Marquee bar: 40px desktop / 34px mobile
- Border radius: 4px on buttons/cards; circular (50%) on the +/× toggle

**Shadows/borders**
- No drop shadows in this design — flat color fields throughout.
- 1px black rule between project-page columns; 2px black stroke on tag-filter bars.

## Assets
No real photography, video, or drawings are included — every image/video slot in the reference file is a striped placeholder labeled with what belongs there (e.g. "image placeholder", "1990s lacrosse drawing placeholder"). Source the real project photos/video and the grandmother-page drawings from Avery directly.

## Files
- `averylawrence-wireframes.dc.html` — the full design reference described above. Open directly in a browser. Sections are labeled 1 (splash gate), 2 (home page), 3 (project page layouts) with lettered options within each (e.g. 2a = home desktop, 2c = home mobile).
- `screenshots/` — static PNGs of each screen for quick reference without opening the HTML file:
  - `01-splash-page.png`, `02-grandmother-page.png`
  - `03-home-desktop.png`, `04-home-mobile.png`
  - `05-project-standard-split.png`, `06-project-fullbleed-hero.png`, `07-project-gallery-grid.png`, `08-project-mobile-stacked.png`
