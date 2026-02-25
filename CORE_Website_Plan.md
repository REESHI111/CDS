# CORE Consultancy - Website Architecture & UX Plan

## 1. Design & Technical Direction

**Theme Aesthetic:** "Pristine Modernism / Ultra-Minimal" 
- **Colors:** A highly refined, monochromatic palette. Deep blacks (or stark whites if light mode), charcoal grays, and stark contrasting text. Zero gold, neon, or heavy gradients. The luxury comes from perfection in spacing and contrast.
- **Typography:** 
  - *Primary:* Ultra-clean, modern sans-serifs (e.g., *PP Neue Montreal*, *Geist*, or *Inter Tight*) for a precise, engineered, and flawless look.
  - *Structure:* Extreme reliance on typographic scale, crisp tracking, and perfect leading rather than colors to establish hierarchy.
- **Visuals:** Massive use of negative space. Clean geometry, sharp lines, and restrained, high-end photography/video. No heavy glassmorphism or overly complex 3D unless extremely subtle.

**Technical Stack Recommendations:**
- **Next.js (App Router):** For server-side rendering, instant page loads, and top-tier SEO.
- **Tailwind CSS:** For scalable, clean, and highly customizable styling.
- **Framer Motion:** For spring-physics-based, buttery-smooth staggered reveals and layout transitions.
- **Lenis (Studio Freight):** For flawless, 60fps momentum-based scrolling.

---

## 2. Page Hierarchy & Section Breakdown

### 2.1 Home (The "Hero" Experience)
**Goal:** High-impact first impression defined by confidence and restraint.
- **Hero Section:**
  - *Visual:* Vast negative space. A strictly typographic layout.
  - *Content:* Minimalist bold headline (e.g., "Engineering the Digital Elite.").
  - *Interaction:* Silky smooth, staggered fade-and-slide up for text. A subtle, physics-based custom cursor.
- **Brand Marquee / Trust Signals:**
  - *Visual:* Clean, monochrome client logos gliding infinitely at a very slow, constant speed.
- **The Vision (Intro to About):**
  - *Content:* 2-3 perfectly set sentences.
  - *UX/Scroll Behavior:* Opacity-based scroll scrubbing. Text goes from 10% to 100% opacity smoothly as it enters the center of the viewport.
- **Featured Case Studies (Portal to Portfolio):**
  - *Visual:* Large, unadorned cards or edge-to-edge images that rely purely on the quality of the work.
  - *Interaction:* On hover, the image scales up *very* slightly (1.02x) with a refined, easing transition. Text or labels gently fade in.
- **Global CTA / Footer Transition:**
  - *UX:* Clean, stark footer. As the user reaches the bottom, a simple, elegant parallax reveal exposes the final "Work With Us" prompt.

### 2.2 About / Vision
**Goal:** Build authority through transparency and sharp messaging.
- **Hero:**
  - *Visual:* Typography-led layout. "We build flawless digital experiences."
- **Core Values / Manifesto:**
  - *Layout:* A strict, Swiss-style grid. 
  - *Interaction:* Simple lines that draw themselves on scroll to separate the grid. Text reveals with a clean mask-up animation.
- **The Numbers / Impact:**
  - *Animation:* Minimalist counters rolling up smoothly, set in a highly legible monospace or technical font.

### 2.3 Services
**Goal:** Clear, technical, and immediately understandable breakdown of capabilities.
- **Hero:** "Capabilities & Discipline."
- **Service Pillars:**
  - *Layout:* A brutalist / minimalist list layout. Left side sticky headers, right side scrolling details.
  - *Animation:* A 1px line expands horizontally to separate services when scrolled into view. Details fade in softly.

### 2.4 Case Studies / Portfolio
**Goal:** The work takes absolute center stage.
- **Hero:** "Selected Works."
- **Project Grid:**
  - *Layout:* A meticulously aligned, alternating grid with massive spacing between projects.
  - *Interaction:* Moving the mouse over the project area smoothly tracks a custom "View" label alongside the cursor.
- **Individual Case Study Page Skeleton:**
  - Clean hero image with a very soft zoom-out effect on load.
  - Strict two-column text layout for Challenge/Solution.
  - Edge-to-edge high-framerate prototype videos embedded seamlessly, auto-playing on scroll into view.

### 2.5 Process
**Goal:** Showcase extreme professionalism and structural thinking.
- **Pipeline Timeline:**
  - *Layout:* A simple vertical or horizontal axis. 
  - *UX:* As the user scrolls, the active phase turns solid black (or white), while inactive phases dim to 20% opacity. Smooth, instant transitions.

### 2.6 Team / Leadership
**Goal:** Humanize the brand while maintaining the minimalist aesthetic.
- **Leadership Roster:**
  - *Layout:* Uniform, stark black-and-white portrait photography against a neutral background.
  - *Interaction:* Hovering provides a gentle scale effect and reveals minimal text detailing their role.

### 2.7 Contact
**Goal:** Frictionless intake with zero distractions.
- **Hero / Form:**
  - *Layout:* A single, massive text input field ("Hello, my name is...") that dynamically updates as the user fills in details, or a hyper-clean standard form with 1px borders.
  - *UX:* Entering a field highlights the border smoothly. Success states are simple text changes ("Message sent.") without flashy checkmarks.

---

## 3. Global UX & Micro-Interactions
- **Custom Cursor:** A tiny, highly responsive dot. It disappears when hovering over clickable elements, replaced by a subtle expansion of the element itself, or morphs cleanly into a minimalist "Play" or "View" text.
- **Seamless Page Transitions:** Instant routing with Next.js, accompanied by a rapid, smooth fade-out / fade-in. No heavy curtains or complex blocking animations.
- **Fluid Typography:** CSS `clamp()` functions to ensure typography remains perfectly proportioned across every single device, adhering strictly to the typographic scale.
- **Motion Philosophy:** "Invisible unless noticed." Animations should be fast (300-500ms), use spring physics for natural resting states, and never feel like they are making the user wait.
