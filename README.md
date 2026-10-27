# KIA ASSOCIATE — Corporate Multilingual Website

**Brand Tagline**: Compliance. Confidence. Credibility.  
**Leadership**: KHIBDHIYA I (Founder — KIA ASSOCIATE, Pursuing B.E.)

---

## Overview

**KIA ASSOCIATE** is a modern corporate compliance consultancy website engineered for textile manufacturers, garment factories, exporters, suppliers, factory owners, HR managers, and supply-chain enterprises.

The platform provides comprehensive advisory and audit preparation across:
- **Statutory Compliance**: ESI Act, EPF Act, Factories Act, Labour Welfare & Employment Laws.
- **Social Compliance Audits**: SA8000, Workplace Conditions, Working Hours & Fair Wage Verifications, Occupational Health & Safety.
- **International Buyer Audits & Standards**: SEDEX / SMETA (2-Pillar & 4-Pillar), WRAP, Disney Supplier Compliance (ILS/FAMA), amfori BSCI.
- **Sustainability & Traceability Standards**: GRS (Global Recycled Standard), GOTS (Global Organic Textile Standard), OEKO-TEX®, Chain of Custody (COC), ETI, FLA, Fair Trade.
- **Buyer & Factory Audits & CAP Support**: Pre-audit walkthroughs, mock audits, non-conformance root cause analysis, and corrective action plans (CAP).

> **Important**: This platform strictly excludes all ISO standards and ISO-related services.

---

## Multilingual Architecture (i18n)

The website natively supports three complete languages:
1. **English (EN)** — Default
2. **Tamil (தமிழ்)** — Authentic Tamil script with tailored terminology for Indian industrial units.
3. **Hindi (हिन्दी)** — Authentic Devanagari script suited for North and Pan-Indian manufacturing ecosystems.

### Internationalisation Features:
- **Instant Reactive Switching**: Powered by `react-i18next` and `i18next-browser-languagedetector`.
- **Language Switcher**: Segmented selector in the sticky navbar and mobile drawer (`EN | தமிழ் | हिन्दी`).
- **Dynamic HTML `lang` & Typography**: Updates `document.documentElement.lang` and applies font optimizations (`Noto Sans Tamil`, `Noto Sans Devanagari`, `Manrope`, `Inter`).
- **State Persistence**: Remembers visitor's selected language across page reloads and route changes via `localStorage` (`kia_selected_language`).
- **Form Data Preservation**: Form inputs are never lost when visitors switch between languages.

---

## Brand Identity & Design System

- **Electric Cobalt Blue**: `#3457F1`
- **Vivid Violet**: `#8155E8`
- **Bright Coral**: `#FF6B6B`
- **Soft Lavender**: `#F1EDFF`
- **Light Blue / Pale Blue**: `#EAF3FF`
- **Clean White**: `#FFFFFF`
- **Deep Ink**: `#191A35`

---

## Official Company & Founder Details

- **Company Name**: KIA ASSOCIATE
- **Founder**: KHIBDHIYA I
- **Designation**: Founder — KIA ASSOCIATE
- **Qualification**: Pursuing B.E.
- **Contact Number**: `8124385446` (`tel:+918124385446`)
- **Email Address**: `khibdhiya21@gmail.com` (`mailto:khibdhiya21@gmail.com`)
- **Location**: [Google Maps Official Pin](https://maps.app.goo.gl/sZWFd5zTk8VsSYbMA)
- **LinkedIn Profile**: [KHIBDHIYA I on LinkedIn](https://www.linkedin.com/in/khibdhiya-i-a38a1a324?utm_source=share_via&utm_content=profile&utm_medium=member_android)

---

## Project Structure

```text
kia-associate/
├── public/
│   ├── favicon.svg             # KIA ASSOCIATE custom SVG brand mark
│   └── images/
│       ├── hero_factory.jpg    # Verified factory audit photograph (zero ISO)
│       └── grs_inspection.jpg  # Textile testing & recycled material inspection
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with language switch & mobile drawer
│   │   ├── LanguageSwitcher.jsx# EN / தமிழ் / हिन्दी switcher
│   │   ├── HeroSection.jsx     # Split layout with value props & floating cards
│   │   ├── AboutSection.jsx    # Corporate mission & verified methodology
│   │   ├── ServicesSection.jsx # Categorized services cards with enquiry triggers
│   │   ├── AuditsDirectorySection.jsx # Searchable directory with GRS spotlight banner
│   │   ├── IndustriesSection.jsx # 7 supply chain sector cards
│   │   ├── WhyChooseSection.jsx # 6 core credibility pillars
│   │   ├── WorkingProcessSection.jsx # 4-step framework (Understand, Assess, Improve, Follow Up)
│   │   ├── FounderSection.jsx  # KHIBDHIYA I bio, LinkedIn link & custom photo uploader
│   │   ├── ContactSection.jsx  # Validated enquiry form & contact channel cards
│   │   └── Footer.jsx          # Deep ink footer with legal, quick links & privacy modal
│   ├── data/
│   │   └── servicesData.js     # Comprehensive dataset with multilingual tags & features
│   ├── i18n/
│   │   ├── index.js            # i18next configuration & HTML lang sync
│   │   └── locales/
│   │       ├── en.json         # English strings
│   │       ├── ta.json         # Authentic Tamil strings
│   │       └── hi.json         # Authentic Hindi Devanagari strings
│   ├── App.jsx                 # Main layout and route controller
│   ├── index.css               # Design tokens, gradients, and font rules
│   └── main.jsx                # Application root
├── index.html                  # SEO tags, Google Fonts, and OpenGraph metadata
├── tailwind.config.js          # Brand color extensions and typography configs
├── vite.config.js              # Vite bundler configuration
└── package.json
```

---

## Local Development & Setup Instructions

### 1. Prerequisites
- Node.js (v18 or higher recommended, tested on Node v24)
- npm (v9 or higher)

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The server will start at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 5. Preview Production Bundle
```bash
npm run preview
```

---

## Backend & Email Integration Configuration

The enquiry form in `ContactSection.jsx` is fully wired with:
1. **Frontend Validation**: Validates full name, factory name, work email pattern, 10-digit phone number, service selection, and message length.
2. **Instant Preselection**: Selecting any service in the directory automatically preselects that service in the enquiry form.
3. **Redundant Direct Dispatch**: On submission, it creates a formatted direct email client link and backup session record.

### Deploying with an Email API:
To connect an automated backend email service for production:
- **Web3Forms / Formspree**:
  In `ContactSection.jsx`, replace the simulation handler with a `fetch` POST request to your Formspree/Web3Forms endpoint.
- **EmailJS / Resend**:
  Create a `.env` file in root:
  ```env
  VITE_EMAIL_SERVICE_ID=your_service_id
  VITE_EMAIL_TEMPLATE_ID=your_template_id
  VITE_EMAIL_PUBLIC_KEY=your_public_key
  ```
  And call the SDK within `handleSubmit`.
