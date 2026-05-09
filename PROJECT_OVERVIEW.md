# PROJECT_OVERVIEW.md — Jilbada Website

> **The Map** — نظرة عامة سريعة عن المشروع، الـ stack، الهيكل، والـ workflow.
> ابدأ من هنا لو أنت new to the project.

---

## 🌿 ما هو هذا المشروع؟

**Jilbada** هو موقع براند أزياء محتشمة فاخرة، مستوحى من الأندلس.

### المرحلة الحالية
**Phase 1: Brand Website (Storytelling)** — موقع تعريفي لبناء الهوية والـ awareness قبل إطلاق الـ e-commerce.

### المراحل القادمة
- **Phase 2**: E-commerce store (Shopify or Next.js + Stripe)
- **Phase 3**: Journal/Blog with rich editorial content
- **Phase 4**: Customer accounts, wishlist, community features

---

## 🎯 الـ Goals للموقع الحالي

1. **بناء هوية البراند** بصرياً وصوتياً
2. **تقديم الـ 3 collections** (Mathaba, Muhajirat, Mutmainna) بعمق
3. **جذب الـ early audience** عبر email signup
4. **SEO foundation** قوي للنمو المستقبلي
5. **Performance ممتاز** — Lighthouse score 90+ في كل المقاييس

### الـ Goals اللي ليست أولوية الآن
- ❌ Online sales (لاحقاً)
- ❌ User accounts
- ❌ Complex animations / 3D
- ❌ Multi-currency / multi-region

---

## 💻 الـ Tech Stack

### Current (Phase 1)
- **HTML5** — semantic markup
- **CSS3** — vanilla, mobile-first, Custom Properties
- **JavaScript ES6+** — vanilla, progressive enhancement
- **No frameworks** — لتقليل الـ overhead وتعميق التحكم

### Tools
- **Hosting**: Netlify أو Vercel (static)
- **Domain**: jilbada.com (assumed)
- **Analytics**: Plausible أو Fathom (privacy-focused)
- **Forms**: Formspree أو Netlify Forms للـ contact/email signup
- **Fonts**: Google Fonts (Cormorant Garamond, Inter, IBM Plex Sans Arabic)

### Future (Phase 2+)
- **Framework**: Next.js 14+ (App Router) + TypeScript
- **Styling**: Tailwind (with custom config matching design tokens)
- **CMS**: Sanity أو Strapi للـ Journal
- **E-commerce**: Shopify (headless) أو Medusa.js
- **Payments**: Stripe + local gateways (Paymob للمصري)

---

## 📁 الـ File Structure

```
jilbada-website/
│
├── 📄 README.md
├── 📄 CLAUDE.md                      ← Claude Code memory (read first)
├── 📄 BRAND_GUIDELINES.md             ← Brand bible
├── 📄 DESIGN_DECISIONS.md             ← Why we made each choice
├── 📄 PROJECT_OVERVIEW.md             ← This file
│
├── 📄 index.html                      ← Home page
│
├── 📁 pages/
│   ├── 📄 about.html
│   ├── 📄 collections.html            ← Overview of 3 stages
│   ├── 📄 mathaba.html                ← Stage 1
│   ├── 📄 muhajirat.html              ← Stage 2
│   ├── 📄 mutmainna.html              ← Stage 3
│   ├── 📄 journal.html                ← Future content hub
│   └── 📄 contact.html
│
├── 📁 css/
│   ├── 📄 reset.css                   ← CSS reset (modern, minimal)
│   ├── 📄 variables.css               ← Custom Properties (colors, fonts, spacing)
│   ├── 📄 typography.css              ← Type system
│   ├── 📄 layout.css                  ← Grid, containers
│   ├── 📄 utilities.css               ← Helper classes
│   └── 📁 components/
│       ├── 📄 navigation.css
│       ├── 📄 hero.css
│       ├── 📄 buttons.css
│       ├── 📄 cards.css
│       ├── 📄 footer.css
│       └── 📄 forms.css
│
├── 📁 js/
│   ├── 📄 main.js                     ← Entry point
│   ├── 📁 modules/
│   │   ├── 📄 navigation.js           ← Mobile menu, scroll behavior
│   │   ├── 📄 lazy-load.js            ← Image lazy loading
│   │   ├── 📄 lang-switcher.js        ← Arabic/English toggle
│   │   └── 📄 forms.js                ← Form validation/submission
│   └── 📄 utils.js
│
├── 📁 assets/
│   ├── 📁 logos/
│   │   ├── 🖼️ wordmarkgreen.png
│   │   ├── 🖼️ wordmarkcream.png
│   │   ├── 🖼️ submarkgreen.png
│   │   └── 🖼️ submarkcream.png
│   │
│   ├── 📁 images/
│   │   ├── 📁 campaigns/
│   │   │   ├── 🖼️ Mathaba.jpg
│   │   │   ├── 🖼️ Muhajirat.jpg
│   │   │   ├── 🖼️ Mutmainna.jpg
│   │   │   └── 🖼️ C_FINAL2x.png
│   │   │
│   │   ├── 📁 lifestyle/
│   │   │   ├── 🖼️ archportal.jpg
│   │   │   ├── 🖼️ womanflowers.jpg
│   │   │   ├── 🖼️ womanrunning.jpg
│   │   │   ├── 🖼️ womansitting.jpg
│   │   │   └── 🖼️ rosebutterfly.jpg
│   │   │
│   │   └── 📁 products/               ← (Future)
│   │
│   └── 📁 fonts/                      ← (Optional self-hosted fonts)
│
└── 📁 docs/                           ← (Optional additional docs)
    ├── 📄 CONTRIBUTING.md
    └── 📄 DEPLOYMENT.md
```

---

## 🗺️ Site Map & User Journey

### Primary Flow
```
Home (Hero + Brand Story)
  ↓
Discover Collections
  ↓
Mathaba / Muhajirat / Mutmainna
  ↓
About (Founder Story + Values)
  ↓
Email Signup (capture)
```

### Pages Detail

#### 1. Home (`/`)
**Sections**:
- Hero (full-screen, image/video, tagline)
- Brand Story (short, poetic, with imagery)
- Collections Preview (3 cards leading to each stage)
- Editorial Quote/Verse
- Email Signup CTA
- Footer

#### 2. About (`/about`)
**Sections**:
- Hero (founder story or brand essence)
- "Inspired by Al-Andalus" (visual storytelling)
- Values (sustainability, ethics, modesty)
- Process (how we make things)
- Contact CTA

#### 3. Collections Overview (`/collections`)
**Sections**:
- Hero ("A journey in three chapters")
- Stage 1 — Mathaba (preview)
- Stage 2 — Muhajirat (preview)
- Stage 3 — Mutmainna (preview)
- "Begin your journey" CTA

#### 4. Stage Pages (`/mathaba`, `/muhajirat`, `/mutmainna`)
**Sections** (per stage, with stage-specific mood):
- Hero (campaign image, name, Arabic + English)
- Concept/Story (2-3 paragraphs)
- Lookbook (4-6 images)
- Featured Pieces (when products exist)
- Inspiration sources (Andalusi reference imagery)

#### 5. Journal (`/journal`)
**For now**: "Coming soon" page with email signup.
**Later**: Editorial content (articles on heritage, modest fashion, women's stories).

#### 6. Contact (`/contact`)
**Sections**:
- Headline ("We'd love to hear from you")
- Contact form (name, email, message)
- Social media links
- Office/atelier address (if any)

---

## 🌐 Internationalization (i18n)

### Languages
- **English** (primary in code)
- **Arabic** (full support, RTL)

### Implementation Approach
**For Phase 1 (static HTML)**:
- Two parallel pages: `/index.html` (EN) و `/ar/index.html` (AR)
- Language switcher in navigation
- `lang` attribute properly set
- `dir="rtl"` on Arabic pages

**For Phase 2 (Next.js)**:
- next-intl أو next-i18next
- `/en/` و `/ar/` routes
- Single source for translations

### URL Structure
```
jilbada.com/              ← English (default)
jilbada.com/ar/           ← Arabic
jilbada.com/about         ← English about
jilbada.com/ar/about      ← Arabic about
```

---

## 🎨 Design Tokens (Quick Reference)

### Colors
```css
:root {
  /* Primary */
  --color-forest:        #1F3D32;
  --color-cream:         #E8E1D3;
  
  /* Secondary */
  --color-charcoal:      #1A1A1A;
  --color-white-soft:    #FAF8F3;
  
  /* Accent */
  --color-gold:          #B8956A;
  
  /* Stage tints */
  --color-mathaba-cream: #F0E9D9;
  --color-mathaba-beige: #D4C4A8;
  --color-muhajirat-sage: #7A8B6F;
  --color-muhajirat-olive: #5C6E4A;
  --color-mutmainna-mist:  #9CA3A0;
  --color-mutmainna-silver: #C5CDC9;
}
```

### Typography
```css
:root {
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
  --font-body:    'Inter', -apple-system, sans-serif;
  --font-arabic:  'IBM Plex Sans Arabic', 'Tajawal', sans-serif;
  --font-arabic-display: 'Reem Kufi', 'Amiri', serif;
}
```

### Spacing (8pt grid)
```css
:root {
  --space-1:  0.5rem;   /* 8px */
  --space-2:  1rem;     /* 16px */
  --space-3:  1.5rem;   /* 24px */
  --space-4:  2rem;     /* 32px */
  --space-5:  2.5rem;   /* 40px */
  --space-6:  3rem;     /* 48px */
  --space-8:  4rem;     /* 64px */
  --space-10: 5rem;     /* 80px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */
  --space-20: 10rem;    /* 160px */
}
```

### Breakpoints
```css
/* Mobile first — base = 0+ */
/* sm:  640px+  — large mobile */
/* md:  768px+  — tablet */
/* lg:  1024px+ — desktop */
/* xl:  1280px+ — large desktop */
/* 2xl: 1536px+ — extra wide */
```

---

## ⚡ Performance Targets

- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 100
- **Lighthouse Best Practices**: 100
- **Lighthouse SEO**: 100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Page Size**: < 1.5 MB (initial load)

### كيف نحقق ذلك
- **Images**: WebP format, `loading="lazy"`, proper sizing, srcset
- **Fonts**: `font-display: swap`, preload critical fonts
- **CSS**: Critical CSS inline, rest deferred
- **JS**: Vanilla, minimal, deferred where possible
- **HTTP**: HTTP/2, compression (gzip/brotli)
- **CDN**: عبر Netlify/Vercel automatically

---

## 🔍 SEO Foundation

### Meta Setup (per page)
```html
<title>Jilbada — Always Inspiring | Modest Luxury Inspired by Al-Andalus</title>
<meta name="description" content="Discover Jilbada, modest fashion inspired by Al-Andalus. Three collections — Mathaba, Muhajirat, Mutmainna — for the modern modest woman.">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="/assets/images/og-cover.jpg">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="ar_EG">
<link rel="canonical" href="https://jilbada.com/">
<link rel="alternate" hreflang="en" href="https://jilbada.com/">
<link rel="alternate" hreflang="ar" href="https://jilbada.com/ar/">
```

### Schema.org
- **Organization** schema على الـ home
- **Article** schema للـ journal posts (later)
- **Product** schema (when shop launches)

### Keywords (Primary)
- modest fashion
- abaya
- jilbab
- modest luxury
- Andalusi-inspired fashion
- أزياء محتشمة
- جلباب فاخر
- حجاب أنيق

---

## 🚀 Getting Started (للـ Developer)

### Prerequisites
- Code editor (VS Code أو Cursor recommended)
- Node.js 18+ (for development server, not for build)
- Git

### Setup
```bash
# Clone the repo
git clone <repo-url> jilbada-website
cd jilbada-website

# Read the docs (in this order)
cat CLAUDE.md
cat PROJECT_OVERVIEW.md
cat BRAND_GUIDELINES.md
cat DESIGN_DECISIONS.md

# Start dev server (one of these)
npx serve .
# or
npx live-server
# or
python3 -m http.server 8000
```

### Workflow
1. **Branch**: `feature/section-name` or `fix/issue-description`
2. **Develop**: Follow the conventions in `CLAUDE.md`
3. **Test**: Across breakpoints (375, 768, 1024, 1440px)
4. **Lighthouse**: Run before PR, screenshot scores
5. **PR**: Reference any Brand Guidelines section affected

---

## 📋 Current Status & Next Steps

### ✅ Done
- Brand identity (logos, colors, typography)
- 3-stage concept defined
- Campaign imagery (assets ready)
- Documentation structure

### 🚧 In Progress
- Website development (Phase 1)

### 📅 Next Up
1. Build `index.html` (home page) — first deliverable
2. Build `about.html`
3. Build collections overview page
4. Build 3 stage detail pages
5. Build contact + journal placeholder
6. Arabic versions of all pages
7. Deploy to staging
8. Lighthouse optimization
9. Launch 🌿

---

## 🤝 الفريق & الـ Roles

- **Brand Owner / Founder**: [الاسم] — final authority على كل قرار
- **Developer (you + Claude Code)**: implementation
- **Designer**: [إذا موجود] — visual decisions
- **Copywriter**: [إذا موجود] — bilingual copy

---

## 📞 Support & Communication

- **Daily questions**: في الـ chat مع Claude Code
- **Brand questions**: راجع `BRAND_GUIDELINES.md` ثم اسأل صاحبة البراند
- **Tech questions**: راجع `CLAUDE.md` ثم اسأل
- **Design conflicts**: راجع `DESIGN_DECISIONS.md` قبل أي تعديل

---

*Welcome to the project. Build with care, with intention, with beauty.*
*Jilbada™ — Always Inspiring — EST 1446/2026*
