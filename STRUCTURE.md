# Project File Structure

## Complete Directory Tree

```
jsp777-portfolio/
│
├── src/
│   ├── components/
│   │   ├── ui/                          # Shadcn UI Components (Pre-built)
│   │   │   ├── accordion.jsx
│   │   │   ├── alert.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── textarea.jsx
│   │   │   ├── toast.jsx
│   │   │   ├── toaster.jsx
│   │   │   └── ... (30+ components)
│   │   │
│   │   ├── Header.jsx                   # Top navigation with J$P777 logo
│   │   ├── Hero.jsx                     # Main hero section with typing animation
│   │   ├── About.jsx                    # About me section with 3D card
│   │   ├── Skills.jsx                   # Skills grid with progress bars
│   │   ├── Projects.jsx                 # Project cards with 3D tilt
│   │   ├── Experience.jsx               # Timeline experience section
│   │   ├── Contact.jsx                  # Contact form with social links
│   │   └── Footer.jsx                   # Footer with copyright
│   │
│   ├── data/
│   │   └── mock.js                      # All portfolio data (EDIT THIS!)
│   │
│   ├── hooks/
│   │   └── use-toast.js                 # Toast notification hook
│   │
│   ├── App.js                           # Main application component
│   ├── App.css                          # App-specific styles
│   ├── index.js                         # React entry point
│   └── index.css                        # Global styles + Tailwind imports
│
├── public/
│   ├── index.html                       # HTML template
│   └── favicon.ico                      # Website icon
│
├── package.json                         # Project dependencies
├── tailwind.config.js                   # Tailwind CSS configuration
├── craco.config.js                      # Create React App config override
├── .env                                 # Environment variables
├── .gitignore                           # Git ignore file
├── README.md                            # Main documentation
├── QUICKSTART.md                        # Quick start guide
└── STRUCTURE.md                         # This file
```

---

## Key Files Explained

### 📝 Data & Content

**`src/data/mock.js`** - YOUR MAIN EDIT FILE
```javascript
// Contains all your portfolio data:
- personalInfo (name, title, bio, email, logo)
- skills (array of skills with levels)
- projects (array of projects)
- experience (work history)
- socialLinks (GitHub, LinkedIn, etc.)
```

### 🎨 Main Components

**`src/components/Hero.jsx`** (301 lines)
- Typing animation logic
- 3D logo with mouse tracking
- CTA buttons
- Parallax background grids
- Floating particles

**`src/components/Header.jsx`** (161 lines)
- J$P777 animated logo
- Glitch effects
- Navigation menu
- Mobile responsive menu

**`src/components/About.jsx`**
- 3D card with mouse tilt
- Dynamic lighting effect
- Info cards (role, location, status)

**`src/components/Skills.jsx`**
- 10 skill cards with progress bars
- 3D tilt on hover
- Category-based color coding
- Shimmer effects

**`src/components/Projects.jsx`**
- 4 project cards
- Mouse-tracked 3D tilt
- Dynamic lighting
- Technology badges

**`src/components/Experience.jsx`**
- Timeline layout
- Animated nodes
- Experience cards

**`src/components/Contact.jsx`**
- Contact form (name, email, phone, message)
- Social media links
- Toast notifications

**`src/components/Footer.jsx`**
- Copyright info
- Social links

### ⚙️ Configuration Files

**`package.json`**
- Project dependencies
- Scripts (start, build, test)
- Version info

**`tailwind.config.js`**
- Tailwind CSS configuration
- Color palette
- Theme extensions

**`.env`**
```
REACT_APP_BACKEND_URL=your_backend_url
```

**`src/index.css`**
- Google Fonts import (Orbitron & Inter)
- Tailwind directives
- Global CSS variables
- Custom scrollbar styles

**`src/App.css`**
- App-specific styles
- Smooth scrolling
- Custom animations

---

## Component Hierarchy

```
App
├── Header
└── Main
    ├── Hero
    ├── About
    ├── Skills
    ├── Projects
    ├── Experience
    ├── Contact
    └── Footer
```

---

## Data Flow

```
mock.js (data)
    ↓
Component imports
    ↓
Component renders with data
    ↓
User sees styled content
```

---

## Styling Approach

1. **Tailwind CSS** - Utility classes
2. **Inline styles** - Dynamic values (transforms, shadows)
3. **CSS modules** - Component-specific styles
4. **Keyframe animations** - Custom animations in `<style>` tags

---

## Important Directories

| Directory | Purpose | Edit? |
|-----------|---------|-------|
| `/src/components/` | All React components | ✅ Yes |
| `/src/components/ui/` | Shadcn UI library | ❌ No |
| `/src/data/` | Portfolio content | ✅ YES! |
| `/src/hooks/` | Custom React hooks | ⚠️ Rarely |
| `/public/` | Static assets | ✅ Yes |

---

## Files You SHOULD Edit

✅ **Must Edit:**
- `src/data/mock.js` - Your portfolio content

✅ **Recommended:**
- `src/components/About.jsx` - Personal bio
- `src/components/Hero.jsx` - Hero text/animation
- `public/index.html` - Page title, meta tags

⚠️ **Optional:**
- `src/index.css` - Colors, fonts
- `tailwind.config.js` - Theme customization
- Component files - Advanced customization

❌ **Don't Edit:**
- `src/components/ui/*` - Shadcn UI components
- `node_modules/` - Dependencies
- `package-lock.json` / `yarn.lock` - Lock files

---

## Build Output

When you run `yarn build`, it creates:
```
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
└── ...
```

This is your production-ready website!

---

**Navigation:**
- [← Back to README](./README.md)
- [← Quick Start Guide](./QUICKSTART.md)
