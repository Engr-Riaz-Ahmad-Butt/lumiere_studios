# Lumière Studios - Design System
## Premium Wedding & Cinematography Studio UI/UX Guidelines

---

## 🎨 1. COLOR PALETTE

### Primary Palette
```css
Champagne Gold (Primary)
- Main: #D4A574 (HSL: 38° 65% 50%)
- Light: #E5C298 (HSL: 38° 70% 65%)
- Dark: #9E7744 (HSL: 38° 60% 35%)
- Usage: CTAs, accents, luxury highlights

Deep Charcoal (Background)
- Main: #0A0908 (HSL: 20° 14% 4%)
- Light: #1A1816 (HSL: 20° 12% 12%)
- Card: #121110 (HSL: 20° 14% 7%)
- Usage: Backgrounds, cards, depth

Warm Cream (Foreground)
- Main: #F2EAE1 (HSL: 40° 33% 94%)
- Muted: #8A837A (HSL: 40° 10% 55%)
- Usage: Text, contrast elements
```

### Accent Colors
```css
Champagne Cream
- #EBE1D8 (HSL: 35° 40% 85%)
- Usage: Secondary highlights, soft backgrounds

Warm Gray
- #5C564F (HSL: 20° 8% 35%)
- Usage: Subtle borders, dividers
```

### Emotion Mapping
- **Luxury**: Champagne gold gradients
- **Intimacy**: Deep charcoals with soft cream
- **Romance**: Warm undertones throughout
- **Sophistication**: High contrast ratios (AAA accessibility)

---

## ✍️ 2. TYPOGRAPHY

### Font Families
```css
Display/Heading Font: 'Playfair Display'
- Weights: 400, 500, 600, 700
- Style: Regular + Italic
- Usage: H1-H6, hero titles, section headers
- Characteristics: Elegant serif, romantic, timeless

Body Font: 'Inter'
- Weights: 300, 400, 500, 600
- Usage: Paragraphs, UI elements, navigation
- Characteristics: Clean sans-serif, highly legible, modern
```

### Type Scale (Responsive)
```css
Hero Heading (H1)
- Mobile: 2rem (32px) / Line: 0.9
- Tablet: 3rem (48px) / Line: 0.9
- Desktop: 5rem (80px) / Line: 0.9
- Desktop XL: 6rem (96px) / Line: 0.9
- Font: Playfair Display Bold

Section Heading (H2)
- Mobile: 1.75rem (28px) / Line: 1.1
- Tablet: 2.25rem (36px) / Line: 1.1
- Desktop: 3rem (48px) / Line: 1.1
- Font: Playfair Display Semibold

Subsection (H3)
- Mobile: 1.5rem (24px) / Line: 1.2
- Desktop: 2rem (32px) / Line: 1.2
- Font: Playfair Display Medium

Body Large
- Size: 1.125rem (18px) / Line: 1.6
- Font: Inter Regular

Body Standard
- Size: 1rem (16px) / Line: 1.6
- Font: Inter Regular

Body Small
- Size: 0.875rem (14px) / Line: 1.5
- Font: Inter Regular

Caption/Label
- Size: 0.75rem (12px) / Line: 1.4
- Font: Inter Medium
- Transform: Uppercase
- Tracking: 0.1em (wide)
```

### Text Treatments
```css
Italic Emphasis
- Use Playfair Display Italic for romantic emphasis
- Apply to key emotional words (Timeless, Beautiful, Forever)

Gradient Text
- Apply gold gradient to premium keywords
- CSS: background: linear-gradient(135deg, #D4A574, #E5C298)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
```

---

## 📐 3. LAYOUT SYSTEM

### Grid Structure
```css
Container Widths
- Max Width: 1280px (80rem)
- Padding: 
  - Mobile: 1rem (16px)
  - Tablet: 1.5rem (24px)
  - Desktop: 2rem (32px)

Column Grid
- Mobile: 1 column
- Tablet: 2 columns (gap: 2rem)
- Desktop: 3-4 columns (gap: 2.5rem)

Masonry Portfolio
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- First item spans 2 rows on desktop
```

### Spacing Scale (8px base)
```css
xs: 0.5rem (8px)
sm: 0.75rem (12px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
5xl: 8rem (128px)

Section Padding Y
- Mobile: 4rem (64px)
- Tablet: 6rem (96px)
- Desktop: 8rem (128px)
```

### Layout Principles
1. **Breathing Room**: Generous whitespace (minimum 64px between sections)
2. **Asymmetric Balance**: Offset text/images for visual interest
3. **Visual Hierarchy**: F-pattern reading flow
4. **Golden Ratio**: 1.618 for image aspect ratios where possible
5. **Z-index Layers**: 
   - Background: 0
   - Content: 10
   - Sticky nav: 50
   - Modals: 100

---

## 🎯 4. BUTTON STYLES & INTERACTIONS

### Primary Button (Hero CTA)
```css
Default State:
- Background: Champagne gold (#D4A574)
- Text: Charcoal (#0A0908)
- Padding: 1rem 2rem (16px 32px)
- Border Radius: 0.5rem (8px)
- Font: Inter 600 (Semibold)
- Size: 1rem (16px)
- Shadow: 0 4px 30px rgba(212, 165, 116, 0.15)

Hover State:
- Background: Light gold (#E5C298)
- Transform: translateY(-2px)
- Shadow: 0 8px 40px rgba(212, 165, 116, 0.25)
- Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)

Active State:
- Transform: translateY(0)
- Shadow: 0 2px 15px rgba(212, 165, 116, 0.2)
```

### Secondary Button (Elegant)
```css
Default State:
- Background: Transparent
- Border: 1px solid rgba(212, 165, 116, 0.3)
- Text: Cream (#F2EAE1)
- Padding: 1rem 2rem
- Border Radius: 0.5rem

Hover State:
- Background: rgba(212, 165, 116, 0.1)
- Border: 1px solid rgba(212, 165, 116, 0.6)
- Transform: translateY(-2px)
```

### Micro-interactions
```css
Ripple Effect on Click:
- Radial gradient from click point
- Duration: 600ms
- Easing: cubic-bezier(0, 0, 0.2, 1)

Loading State:
- Spinning loader icon
- Opacity: 0.6
- Cursor: not-allowed

Icon Animations:
- Arrow icons translate on hover: translateX(4px)
- Play icons scale on hover: scale(1.1)
- Smooth transitions: 300ms ease
```

---

## 🧭 5. NAVBAR BEHAVIOR

### Desktop Navbar
```css
Structure:
- Height: 80px
- Background: Transparent (default)
- Position: Fixed top-0
- Z-index: 50

Logo:
- Font: Playfair Display 600
- Size: 1.5rem (24px)
- "Lumière" in gold gradient
- "Studios" in cream (0.875rem)

Navigation Links:
- Font: Inter 500
- Size: 0.875rem (14px)
- Color: Muted cream (#8A837A)
- Hover: Full cream (#F2EAE1)
- Underline animation: 0 → 100% width from left
- Underline color: Gold (#D4A574)
- Gap: 2rem between links

CTA Button:
- "Book a Session" primary button
- Sticky right alignment

Scroll Behavior:
- Scrolled State (>50px):
  - Background: rgba(10, 9, 8, 0.95) + backdrop-blur(12px)
  - Border-bottom: 1px solid rgba(212, 165, 116, 0.1)
  - Box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3)
  - Smooth transition: 500ms
```

### Mobile Navbar
```css
Hamburger Menu:
- 3-line icon (24px)
- Transforms to X on open
- Animation: 300ms ease

Mobile Menu Panel:
- Slide down from top
- Background: rgba(10, 9, 8, 0.98) + backdrop-blur
- Full width
- Padding: 2rem
- Links stacked vertically
- Gap: 1.5rem
- Staggered entry animation (100ms delay per item)
```

---

## 🦶 6. FOOTER DESIGN

```css
Structure:
- Background: Charcoal (#0A0908)
- Border-top: 1px solid rgba(212, 165, 116, 0.1)
- Padding: 3rem 0

Layout:
- 3 columns on desktop
- Single column on mobile

Column 1: Brand
- Logo with tagline
- Social icons (Instagram, Facebook)
- Icon size: 20px
- Hover: Gold color + scale(1.1)

Column 2: Quick Links
- Service pages
- About, Portfolio, Contact
- Font: Inter 400
- Size: 0.875rem
- Hover: Gold color

Column 3: Contact Info
- Email, phone with icons
- Address (if applicable)
- Icons: 16px gold

Bottom Bar:
- Copyright text (0.75rem)
- "Made with ♥ by Lumière Studios"
- Heart icon in gold
- Muted text color
```

---

## 🖼️ 7. HERO SECTION CONCEPTS

### Layout Option 1: Full-Screen Cinematic
```css
Structure:
- Height: 100vh
- Background: Large wedding image
- Overlay: Linear gradient (charcoal 85% left → 30% right)
- Content: Left-aligned, 40% width

Typography:
- Eyebrow: "PREMIUM WEDDING PHOTOGRAPHY" 
  (uppercase, 0.75rem, gold, tracking-widest)
- H1: "Capturing / Timeless / Moments"
  (3 lines, "Timeless" in italic gold)
- Subheading: 1.125rem paragraph
- 2 CTAs: Primary + Secondary (with play icon)

Decorative Elements:
- Vertical line (1px, gold, 100px) top right
- Large decorative "L" letter (opacity 20%) bottom right
- Scroll indicator (animated arrow) bottom center
```

### Layout Option 2: Split-Screen Elegance
```css
- 50/50 split on desktop
- Left: Video/image carousel (auto-play)
- Right: Content with centered alignment
- Diagonal separator line (gold, 2px)
- Mobile: Stack vertically
```

### Emotional Elements
- Subtle parallax scrolling on background (20% slower)
- Fade-in animations (staggered 200ms delays)
- Ambient video option (muted, slow-motion)
- Ken Burns effect on images (slow zoom + pan)

---

## 📱 8. RESPONSIVE STRATEGY

### Breakpoints
```css
Mobile: 320px - 639px
Tablet: 640px - 1023px
Desktop: 1024px - 1279px
Desktop XL: 1280px+
```

### Mobile-First Approach
1. **Content Priority**: Most important info first
2. **Touch Targets**: Minimum 44x44px
3. **Readable Text**: Minimum 16px body
4. **Simplified Navigation**: Hamburger menu
5. **Single Column**: Stack all content
6. **Larger Buttons**: Full-width or prominent CTAs

### Tablet Optimizations
- 2-column grids where appropriate
- Side-by-side image + text
- Larger typography than mobile
- Reveal more decorative elements

### Desktop Enhancements
- Multi-column layouts (3-4 columns)
- Parallax effects
- Hover interactions
- Advanced animations
- Sidebar filters (portfolio)

### Performance
- Lazy load images below the fold
- Responsive images (srcset)
- WebP format with fallbacks
- Maximum image size: 1920px width
- Compress to <200KB per image

---

## 🎭 9. ANIMATION & MOTION

### Principles
1. **Purposeful**: Every animation tells a story
2. **Subtle**: Enhance, don't distract
3. **Fast**: 300-600ms for most interactions
4. **Natural**: Easing curves mimic physics

### Entrance Animations
```css
Fade Up (Default):
- Opacity: 0 → 1
- Transform: translateY(30px) → 0
- Duration: 600ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

Scale In (Cards):
- Opacity: 0 → 1
- Transform: scale(0.95) → 1
- Duration: 400ms
- Easing: ease-out

Slide In (Nav Items):
- Transform: translateX(-20px) → 0
- Opacity: 0 → 1
- Stagger: 100ms per item
```

### Hover Effects
```css
Cards:
- Border color: fade in gold
- Shadow: increase depth
- Transform: translateY(-4px)
- Duration: 500ms

Images:
- Scale: 1 → 1.05 (subtle zoom)
- Duration: 700ms
- Easing: ease-out

Links:
- Underline grows from left
- Color fades to gold
- Duration: 300ms
```

### Scroll Animations
```css
Intersection Observer:
- Trigger: When 20% of element is visible
- Stagger children: 100ms delay
- Once: true (don't repeat on scroll up)

Parallax:
- Background images: 20% slower than scroll
- Decorative elements: 30% slower
- Smooth: Use transform instead of position
```

---

## 🎨 10. IMAGE GUIDELINES

### Aspect Ratios
```css
Hero Images: 16:9 (cinematic)
Portrait Images: 4:5 (fashion editorial)
Portfolio Thumbnails: 3:4 or 4:3 (flexible)
Square Images: 1:1 (social proof, testimonials)
```

### Treatments
```css
Overlay Gradients:
- Hero: Linear gradient (dark left → transparent right)
- Cards: Gradient from bottom (rgba(10,9,8,0.9) → transparent)

Border Radius:
- Cards: 12px (0.75rem)
- Buttons: 8px (0.5rem)
- Avatar: 50% (circular)

Filters:
- Slight desaturation (95%) for consistency
- Slight contrast boost (105%)
- Warm tone adjustment (sepia 5%)
```

### Decorative Frames
```css
Corner Accents:
- 2px borders on two corners
- Gold color at 30% opacity
- 80px × 80px size
- Positioned absolute with negative margins
```

---

## 🔥 11. SPECIAL COMPONENTS

### Testimonial Carousel
```css
Card Design:
- Max-width: 800px
- Centered
- Large quote icon (64px, gold 20% opacity)
- 5-star rating above quote
- Serif font for quote (italic, 1.5-2rem)
- Client name in gold gradient
- Navigation dots at bottom
- Previous/Next buttons (circular, outlined)
```

### Portfolio Filter
```css
Buttons:
- Pill-shaped (full rounded)
- Active: Solid gold background
- Inactive: Transparent with border
- Smooth color transitions
- Flex wrap on mobile
```

### Contact Form
```css
Inputs:
- Background: Card color (lighter charcoal)
- Border: 1px solid border color
- Focus: Gold border + glow
- Height: 48px
- Padding: 1rem
- Placeholder: Muted color

Textarea:
- Min-height: 120px
- Resize: vertical only

Validation:
- Error: Red border + message below
- Success: Green checkmark icon
```

---

## 💎 12. LUXURY DETAILS

### Gold Accents Placement
- Section eyebrow labels (uppercase small text)
- Animated underlines on hover
- Icon backgrounds (10% opacity circles)
- Divider lines between sections
- Numbers/stats displays
- Active states in navigation

### Depth & Layering
```css
Card Shadows (Elegant):
- Resting: 0 10px 40px rgba(0,0,0,0.3)
- Hover: 0 20px 60px rgba(0,0,0,0.4)

Backdrop Blur:
- Sticky nav: 12px
- Modals: 16px
- Glass-morphism cards: 8px
```

### Micro-Details
- Smooth scroll behavior
- Custom cursor on portfolio items (magnifying glass)
- Page transition fade (300ms)
- Subtle grain texture overlay (2% opacity)
- Vignette effect on hero images

---

## 📋 13. DEVELOPER IMPLEMENTATION CHECKLIST

### CSS Variables Setup
- [ ] Define all color tokens in :root
- [ ] Create gradient utilities
- [ ] Set up shadow variables
- [ ] Configure font families

### Typography
- [ ] Import Google Fonts (Playfair Display + Inter)
- [ ] Create responsive type scale utilities
- [ ] Set up heading styles
- [ ] Configure line-height and letter-spacing

### Layout
- [ ] Configure Tailwind breakpoints
- [ ] Set container max-widths
- [ ] Create spacing scale
- [ ] Build grid utilities

### Components
- [ ] Button variants (primary, secondary, tertiary)
- [ ] Card components with hover effects
- [ ] Form input styling
- [ ] Navigation (desktop + mobile)
- [ ] Footer layout

### Animations
- [ ] Define keyframes for common animations
- [ ] Set up transition utilities
- [ ] Configure Framer Motion variants
- [ ] Implement scroll animations

### Performance
- [ ] Optimize images (WebP, lazy load)
- [ ] Minimize CSS bundle
- [ ] Tree-shake unused styles
- [ ] Enable CSS minification

---

## 🎯 14. INSPIRATION REFERENCES

### Apple-Inspired Elements
- Minimal navigation
- Generous whitespace
- High-quality imagery
- Smooth scrolling
- Product-focused storytelling

### Awwwards Winning Traits
- Unique scroll interactions
- Creative layout asymmetry
- Bold typography choices
- Sophisticated color palette
- Attention to micro-interactions

### Wedding Studio Excellence
- Emotional storytelling
- Romantic color grading
- Elegant serif typography
- Portfolio-first approach
- Trust-building testimonials

### Luxury Fashion Influence
- Editorial layout style
- High contrast photography
- Minimal UI chrome
- Premium material feel
- Aspirational positioning

---

## 📐 15. DESIGN TOKENS (For Developers)

```javascript
// Tailwind Config Extension
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A574',
          light: '#E5C298',
          dark: '#9E7744',
        },
        charcoal: {
          DEFAULT: '#0A0908',
          light: '#1A1816',
        },
        cream: {
          DEFAULT: '#F2EAE1',
          muted: '#8A837A',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(212, 165, 116, 0.15)',
        'elegant': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      backdropBlur: {
        'xs': '2px',
      }
    }
  }
}
```

---

## ✅ FINAL NOTES

This design system balances:
- **Emotion** over functionality
- **Elegance** over complexity
- **Romance** over trends
- **Timelessness** over novelty

Every design decision serves the core mission: making couples fall in love with Lumière Studios before they even reach out.

Implement progressively, test rigorously, and always prioritize the emotional impact of each element.

**Design Philosophy**: "Less, but better" — Every pixel has purpose.
