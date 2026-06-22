# Research Revival Fund - Design Guidelines

## Design Approach
**Reference-Based with Dark Theme Aesthetic**: Drawing inspiration from modern professional research/foundation websites like the Chan Zuckerberg Initiative, Mozilla Foundation, and dark-themed SaaS platforms. The design emphasizes credibility, accessibility, and clarity while maintaining an elegant, contemporary feel.

## Core Design Principles
1. **Professional Credibility**: Clean, sophisticated dark theme that conveys authority
2. **Information Clarity**: Strong typographic hierarchy for research-focused content
3. **Accessible Navigation**: Clear pathways between Home, Learn, FAQ, and Apply sections

## Typography
**Font Stack**: Inter (via Google Fonts) for entire site
- **Headings**: 
  - H1: text-5xl to text-6xl, font-bold, tracking-tight
  - H2: text-4xl, font-semibold
  - H3: text-2xl, font-semibold
- **Body**: text-base to text-lg, font-normal, leading-relaxed
- **Small Text**: text-sm for captions, metadata

## Layout & Spacing System
The layout system uses a highly structured responsive spacing hierarchy based on the TNI (The New Institute) design grid. All major page components (blocks) are contained, stacked, and padded using responsive viewport-relative (`vw`) and `rem`-based variables.

### 1. Responsive Screen Gutters (Horizontal Container Paddings)
Gutters frame the main content containers and expand fluidly to provide adequate whitespace on larger viewports.
* **Mobile / Small Screens (< 768px)**: `2rem` (32px) gutter — `px-8` in Tailwind.
* **Tablets / Medium Screens (768px - 1024px)**: `5rem` (80px) gutter — `md:px-20` in Tailwind.
* **Laptops / Large Screens (1024px - 1280px)**: `7rem` (112px) gutter — `lg:px-28` in Tailwind.
* **Desktops / Widescreens (>= 1280px)**: `10rem` (160px) gutter — `xl:px-40` in Tailwind.
* **Container Boundaries (Max-Width)**:
  * Standard Content Block: `max-w-[128rem]` (2048px)
  * Widescreen Block / Header Line: `max-w-[138rem]` (2208px)
  * Extra-Wide Grid Container: `max-w-[168rem]` (2688px)

### 2. Vertical Block Stacking (Margins)
Spacing between consecutive sections/blocks (`.tni-block + .tni-block`) is generous to establish page pacing.
* **Standard Block Gap**:
  * *Mobile*: `5rem` (80px) top margin — `mt-20` in Tailwind.
  * *Desktop*: `10rem` (160px) top margin — `md:mt-40` in Tailwind.
* **First Block / Hero Clearance** (to account for the sticky header):
  * *Mobile*: `13rem` (208px) top margin — `mt-[13rem]` in Tailwind.
  * *Desktop*: `16.5rem` (264px) top margin — `md:mt-[16.5rem]` in Tailwind.
* **Hero Block Bottom Space**:
  * *Mobile*: `3rem` (48px) bottom margin — `mb-12` in Tailwind.
  * *Desktop*: `5rem` (80px) bottom margin — `md:mb-20` in Tailwind.

### 3. Fluid Vertical Paddings (Viewport-Relative with Caps)
Sections apply top and bottom padding based on three sizing presets. These scale with viewport width (`vw`) but are capped at hard `rem` limits to keep layout heights proportional on ultra-wide monitors.
* **Small Space (`SmallSpace`)**:
  * *Mobile*: `6vw` vertical padding — `py-[6vw]`
  * *Desktop*: `3vw` vertical padding — `md:py-[3vw]`
  * *Clamping Limit*: Maximum `5rem` (80px) — `max-py-[5rem]`
* **Medium Space (`MediumSpace`)**:
  * *Mobile*: `9vw` vertical padding — `py-[9vw]`
  * *Desktop*: `4.8vw` to `6vw` vertical padding — `md:py-[4.8vw]` or `md:py-[6vw]`
  * *Clamping Limit*: Maximum `10rem` (160px) — `max-py-[10rem]`
* **Large Space (`LargeSpace`)**:
  * *Mobile*: `15vw` vertical padding — `py-[15vw]`
  * *Desktop*: `9vw` to `9.7vw` vertical padding — `md:py-[9vw]` or `md:py-[9.7vw]`
  * *Clamping Limit*: Maximum `15rem` (240px) — `max-py-[15rem]`
* **No Space (`NoSpace`)**: `0` padding — `py-0`

### 4. Proportional Grid Columns & Gutters
Columns inside grids adjust their gutter spacing based on screen size, ensuring gaps perfectly complement the external page container gutters. Gaps are subtracted directly from column percentages:
$$\text{Column Width} = \frac{\text{Span}}{12} \times 100\% - \text{Gutter}$$

Where the **Gutter Offset** scales as:
* **Small viewports**: `1rem` offset (total gap `2rem` / 32px) — `gap-8` (equivalent)
  * *Width Example (2-Col)*: `w-[calc(50%-1rem)]`
* **Medium viewports**: `3rem` offset (total gap `6rem` / 96px) — `gap-24` (equivalent)
  * *Width Example (2-Col)*: `md:w-[calc(50%-3rem)]`
* **Large viewports**: `5rem` offset (total gap `10rem` / 160px) — `gap-40` (equivalent)
  * *Width Example (2-Col)*: `lg:w-[calc(50%-5rem)]`

### 5. Profile-Specific Spacing & Layout Structure
* **Profile Hero Section (`tni-block--newProfileHero`)**:
  * Utilizes `topMediumSpace` and `bottomLargeSpace` padding rules.
  * Splitted on desktop into two columns separated by standard grid gutters:
    * *Left column (Media Container)*: Holds a vertical member portrait (height ratio `~149.8%` relative to width).
    * *Right column (Metadata)*: Contains breadcrumb category path, name, linked programs, horizontal rules (`<hr />`), and affiliation details.
* **Standard Member Text/Bio Block (`tni-block--newTextBlock`)**:
  * Utilizes `topNoSpace` and `bottomMediumSpace` (or `bottomLargeSpace` for publications/extended lists).
  * Structure consists of a sidebar header column (holding label headings such as `BIO`, `RESIDENCY`, `PUBLICATIONS` in uppercase tracking-widest text) on the left/top, and the main text wrapper stack on the right/bottom, separated by standard grid gutters. Links within lists are divided by clean `<hr />` elements.

## Color Treatment
Dark theme foundation throughout with high contrast text. No specific color values defined - implementation will handle palette.

## Component Library

### Navigation
- Sticky header with site branding (left) and navigation links (right)
- Links: Home, Learn, FAQ, Apply
- Mobile: Hamburger menu with full-screen overlay

### Hero Section (Home Page)
**Alternative to Science Image**: Use an abstract gradient background or a subtle pattern (geometric, data visualization aesthetic, or research-themed illustration)
- Hero text placement: Left-aligned or centered based on visual balance
- Primary CTA button with blurred background overlay
- Subheading explaining the fund's mission
- Viewport height: 85vh to 90vh for impact

### Content Sections

**Feature Cards** (multi-column on desktop):
- 3-column grid (lg:grid-cols-3) for key initiatives/benefits
- Each card includes icon, heading, description
- Subtle border treatment, consistent padding (p-8)

**Learn Page**:
- Long-form content with clear hierarchy
- Sidebar navigation for section jumping
- Pull quotes or callout boxes for key information
- Supporting imagery showing research impact

**FAQ Page**:
- Accordion-style expandable questions
- Search/filter functionality for large FAQ sets
- Categories if FAQs exceed 10 items

**Apply Page**:
- Multi-step form with progress indicator
- Clear field labels and helper text
- Prominent submission button
- Supporting information sidebar (eligibility, timeline, contact)

### Footer
- 4-column layout: About, Quick Links, Resources, Contact
- Newsletter signup integration
- Social media links
- Copyright and legal links

## Images

### Hero Section
**Replacement for Science Image**: Use a sophisticated abstract background
- Type: Gradient mesh, subtle particle effects, or research data visualization aesthetic
- Mood: Professional, forward-thinking, innovative
- Treatment: Slight overlay to ensure text legibility
- Placement: Full-width background with content overlay

### Supporting Images
- **Learn Page**: 2-3 images showing research environments, teams, or funded projects
- **Apply Page**: Single supporting image showing collaboration or innovation
- All images: High quality, professional photography or custom illustrations
- Aspect ratios: 16:9 for banners, 4:3 for content imagery

## Interactions
- Smooth scroll between sections
- Subtle hover states on cards (slight elevation, no aggressive movement)
- Form field focus states with clear visual feedback
- Accordion expand/collapse with smooth transitions
- Mobile menu slide-in animation

## Responsive Strategy
- **Desktop (lg)**: Multi-column layouts, sidebar navigation
- **Tablet (md)**: 2-column grids, condensed spacing
- **Mobile**: Single column, stacked navigation, touch-friendly targets (min 44px)

## Accessibility
- WCAG AA contrast ratios throughout (critical for dark theme)
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus indicators with 2px outline
- Screen reader-friendly form labels and error messages

## Page-Specific Notes
- **Home**: 4-5 sections (Hero, Mission, Impact Areas, How It Works, CTA)
- **Learn**: Educational content with mixed media (text, images, potentially embedded videos)
- **FAQ**: Searchable, categorized questions with clean accordion UI
- **Apply**: Clear, step-by-step application process with validation and helpful guidance