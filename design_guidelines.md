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

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Consistent section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container max-width: max-w-7xl for sections, max-w-4xl for text-heavy content
- Grid gaps: gap-8 for card layouts, gap-12 for major sections

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