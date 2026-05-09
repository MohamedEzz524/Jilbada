# Jilbada — Project Context for Claude Code

> **Read this first.** This is a luxury modest-fashion e-commerce site rooted in Andalusian heritage. Every decision flows from the brand's spiritual journey philosophy.

---

## 🎯 Project Identity

- **Brand:** Jilbada (جِلبادا) — Shari'ah-compliant loose-fitting attire
- **Founder:** Ebrahim · **Tagline:** *دَوْماً مُلْهِمَة* — "Always Inspiring"
- **Origin Story:** "Our beginning starts where the fall began" — inspired by Andalusia. Name = Spanish *Holgado* (loose) + Quranic *Jilbab*
- **Big Idea:** Devised Modesty — Shari'ah-compliant, loose-fitting hijab without compromises
- **Stack:** Shopify e-commerce (access received). Bilingual EN/AR with RTL toggle.

## 🌿 Three Spiritual Stages (core architecture)

The website is built as a journey through 3 stages — this is non-negotiable:

| # | Stage | Arabic | Status | Theme |
|---|-------|--------|--------|-------|
| 01 | Muhajirat | المهاجرات | **LIVE** | The brave first step. Simple, practical, luminous. |
| 02 | Mathaba | المثابة | Coming Soon | The sanctuary of return. Longer, wider, intricate. |
| 03 | Mutmainna | المطمئنّة | Coming Soon | The soul at peace. Niqab, gloves, complete commitment. |

**Locked stages must NOT look like generic "Coming Soon"** — they use Quranic verses (الزمر ٥٤ for Mathaba, الفجر ٢٧ for Mutmainna) and feel intentional, anticipatory.

## 🎨 Brand Visual System

### Colors (from Brand Guidelines)
```css
--green-deep:    #184835  /* Andalusian Green — primary */
--cream:         #e5ddce  /* Alhambra Cream */
--cream-warm:    #d9ceb3
--gold:          #eccd76  /* Medina Gold — accent */
--gold-deep:     #8f7f49
--terra:         #a23523  /* Sierra Faded Rose */
--ink:           #1c2420  /* Calligraphy Black */
--green-darkest: #0d1f17
```

### Typography
- **Display Latin:** Cormorant Garamond (italic) — stand-in for custom "New Spirit" serif
- **Sans:** Inter (eyebrows/UI labels, uppercase with .3em+ letter-spacing)
- **Display Arabic:** Amiri (titles)
- **Body Arabic:** Noto Naskh Arabic
- **Wordmark:** custom serif with diamond accent above the "J"

### Submark — The Andalusian Butterfly
6-petal organic motif representing "butterfly effect of one woman's grace." Use as: loader, dua-popup centerpiece, dividers, footer watermark, recurring graphic element. **Never mix at same prominence as wordmark.**

### Photography Direction
**Painterly, classical, Andalusian-inflected.** Not commercial fashion photography. Style references: John Singer Sargent, Vermeer, Frederick Bridgman, Hudson River School. Always loose/opaque/non-form-defining fabric. Faces obscured/profile/distant. Subtle film grain. Muted earthy palette.

## 🚨 Critical Brand Rules (NEVER violate)

1. **Modesty is non-negotiable** — fabric must always appear loose, opaque, non-form-defining. No tight, sheer, or body-hugging imagery anywhere.
2. **Never reveal hair, neck, or skin beyond hands and feet** in any generated/styled image.
3. **No commercial fashion-magazine aesthetic** — every image should feel painterly, museum-worthy.
4. **The 3 Stages are sacred order** — never reorder, never add a 4th stage to the core journey.
5. **Tagline stays Arabic** — "دَوْماً مُلْهِمَة" — never translate it as primary form.

## 📁 Repository Structure

```
/
├── index.html                           # Single-page app w/ 6 routed pages
├── styles.css                           # All CSS (~660 lines)
├── script.js                            # Routing, slider, modals, reveals
├── assets/
│   ├── master-cinematic.png             # Hero brand statement (ultra-wide)
│   ├── abaya-muhajirat.jpg              # Stage 1 product hero
│   ├── abaya-mathaba.jpg                # Stage 2 product hero
│   ├── abaya-mutmainna.jpg              # Stage 3 product hero
│   ├── arch-portal.jpg                  # Andalusian arch (philosophy section)
│   ├── woman-flowers.jpg                # Painterly atmosphere
│   ├── woman-running.jpg                # Cinematic 21:9 break
│   ├── woman-sitting.jpg                # Mutmainna serenity
│   ├── rose-butterfly.jpg               # Still-life quiet luxury
│   ├── wordmark-green.png               # Logo on light bg
│   ├── wordmark-cream.png               # Logo on dark bg
│   ├── submark-green.png                # Butterfly on light bg
│   └── submark-cream.png                # Butterfly on dark bg
└── Jilbada_Photography_Prompts.docx     # 15-scene AI prompt brief
```

## 🗺️ Page Routes (data-page attribute)

| Route | Page | Status |
|-------|------|--------|
| `home` | Homepage with hero, stages, philosophy, cinematic break | ✅ |
| `collection` | Muhajirat collection (4 products) | ✅ |
| `product` | Product detail with size recommender | ✅ |
| `about` | Brand story, journey timeline, slow-fashion pledge | ✅ |
| `mathaba` | Stage 2 Coming Soon page | ✅ |
| `mutmainna` | Stage 3 Coming Soon page | ✅ |

## ✨ Implemented Features (from brief)

- ✅ **Dua popup** on first visit — "دعاء دخول السوق" (sessionStorage-gated, ornate Andalusian frame)
- ✅ **Loader** with butterfly submark + tagline
- ✅ **Bilingual EN/AR toggle** with RTL swap and font swap
- ✅ **Hero slider** with Ken Burns effect on real abaya photos (3 stages)
- ✅ **Master cinematic section** — `master-cinematic.png` with scale/opacity reveal
- ✅ **Stage cards** clickable, locked stages route to Coming Soon pages
- ✅ **Smart Size Recommender** modal — BMI-based, includes "M = regular XL" disclaimer
- ✅ **Size disclaimer** prominent in PDP
- ✅ **Coming Soon pages** with Quranic verses and email capture (NOT generic)
- ✅ **Scroll-triggered reveals** via IntersectionObserver
- ✅ **Mobile menu overlay**, sticky shrinking nav, marquee utility bar

## 🔧 Still To Implement (next priorities)

- [ ] **WhatsApp order confirmation** integration (primary), email fallback — message in brand voice
- [ ] **Promo code field** in checkout — visible, never collapsed
- [ ] **Cart drawer/page** — currently icon-only
- [ ] **Checkout flow** — Shopify integration
- [ ] **Religious-question promo system** — questions on social → answers as promo codes
- [ ] **Hero background videos** (currently Ken Burns on stills) — when client provides
- [ ] **Sales targets infrastructure:** 1,500 units in 6 mo / 3,000 units Y1 — analytics, tracking

## 🎙️ Tone of Voice (5 dimensions, blend across copy)

- **Warm** — community, safety, belonging
- **Calm** — tranquil, balanced, away from clamor
- **Dignified** — sophisticated, mutual respect
- **Inspiring** — empowering, ambitious
- **Feminine** — delicate, emotionally resonant

## 🛠️ Working Conventions

- **Single source of truth:** all styles in `styles.css`. Don't inline more than absolutely needed.
- **Bilingual blocks:** wrap all visible text in `.ltr-only` or `.rtl-only` spans. Never hardcode one language.
- **Reveal animations:** add `.reveal` class to elements that should fade-in on scroll. Optionally `transition-delay` inline for stagger.
- **Real photography only.** Don't replace with placeholders.
- **Image filenames are semantic** (e.g., `abaya-muhajirat.jpg`, not `IMG_001.jpg`). Maintain this.
- **Comments in code stay sparse** — let the brand speak.
- **Mobile breakpoint:** `900px` for layout, `700px` for typography, `600px` for grids.

## 📚 Reference Documents

- `Jilbada_Photography_Prompts.docx` — 15 scene-by-scene AI prompts (MidJourney/Flux/DALL·E 3/SDXL) for any new imagery. Always read before generating new visuals.
- Brand Guidelines PDF — full visual system reference (kept by Yosif El-Sirgany, designer).

## 🎬 The Master Cinematic Section

This is the brand's signature frame: ultra-wide painterly visual with a woman in white reaching toward wildflowers, with the wordmark, submark, and tagline embedded. Sits between the tagline strip and the stages section on homepage. Animation: subtle scale (1.04 → 1.0) + opacity (0 → 1) over ~2.4s when scrolled into view, with a delayed shimmer overlay. **This is the soul of the site** — never replace casually.

---

*Last updated by Claude (Anthropic) during the design-concept handoff. Continue this work with the same care for craft, modesty, and Andalusian inheritance that brought us here.*

— *دَوْماً مُلْهِمَة*
