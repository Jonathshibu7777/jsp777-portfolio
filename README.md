# J$P777 - Cybersecurity Portfolio

A stunning 3D cybersecurity-themed portfolio website with advanced animations, typing effects, and interactive elements.

## 🌟 Features

- **3D Interactive Cards**: Mouse-tracking tilt effects on all cards
- **Typing Animation**: Auto-rotating role display in hero section
- **Glitch Effects**: Cyberpunk-style glitch animations on header
- **Dynamic Lighting**: Mouse-tracked lighting effects
- **Parallax Backgrounds**: Multi-layered depth backgrounds
- **Smooth Scrolling**: Seamless section transitions
- **Glassmorphism**: Modern glass-style UI elements
- **Neon Glow Effects**: Purple, cyan, and blue neon aesthetics

## 📁 Project Structure

```
jsp777-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Header.jsx       # Animated header with J$P777 logo
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About section with 3D card
│   │   ├── Skills.jsx       # Skills with progress bars
│   │   ├── Projects.jsx     # 3D project cards
│   │   ├── Experience.jsx   # Timeline experience section
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer component
│   ├── data/
│   │   └── mock.js          # Mock data (projects, skills, etc.)
│   ├── hooks/
│   │   └── use-toast.js     # Toast notification hook
│   ├── App.js               # Main app component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles with Tailwind
│   └── index.js             # Entry point
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── .env                     # Environment variables
└── README.md               # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Extract the files**
   ```bash
   tar -xzf jsp777-portfolio-complete.tar.gz
   cd jsp777-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Update Personal Information
Edit `/src/data/mock.js` to update:
- Name and title
- Bio and tagline
- Skills and levels
- Projects
- Experience
- Social links
- Contact information

### Change Colors
The color scheme uses:
- **Purple**: `#a855f7` (Primary)
- **Cyan**: `#06b6d4` (Accent)
- **Blue**: `#3b82f6` (Secondary)
- **Black**: `#0a0a0f` (Background)

To change colors, update:
- Tailwind config (`tailwind.config.js`)
- Component styles (inline styles in components)

### Modify Animations

**Typing Speed** (Hero.jsx):
```javascript
const typingSpeed = isDeleting ? 50 : 100; // milliseconds per character
const pauseTime = 2000; // pause before deleting
```

**Glitch Frequency** (Header.jsx):
```javascript
const glitchInterval = setInterval(() => {
  setGlitchActive(true);
  setTimeout(() => setGlitchActive(false), 200);
}, 5000); // every 5 seconds
```

## 🎭 Animation Features

### Hero Section
- **Logo**: 3D rotation based on mouse position
- **Typing Effect**: Auto-cycles through roles
- **Floating Animation**: Logo floats up and down
- **Particle Background**: Animated particles with depth

### Header
- **Gradient Shift**: Smooth color transitions
- **Glitch Effect**: Random cyberpunk glitches
- **Scan Line**: Hover scanning effect

### Cards (Skills, Projects, About)
- **3D Tilt**: Mouse-tracking perspective transforms
- **Dynamic Lighting**: Light follows cursor
- **Layered Shadows**: Multiple depth shadows
- **Scale on Hover**: Smooth zoom effects

## 🔧 Technologies Used

- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Lucide React** - Icons
- **Google Fonts** - Orbitron & Inter fonts

## 📦 Dependencies

Key packages:
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.1",
  "axios": "^1.8.4",
  "tailwindcss": "^3.4.17",
  "@radix-ui/*": "Latest versions",
  "lucide-react": "^0.507.0"
}
```

## 🎯 Roles in Typing Animation

The hero section cycles through these roles:
1. Professor
2. Cybersecurity Enthusiast
3. Ethical Hacker
4. Developer

To add/modify roles, edit `Hero.jsx`:
```javascript
const roles = [
  'Professor',
  'Cybersecurity Enthusiast',
  'Ethical Hacker',
  'Developer',
  // Add more roles here
];
```

## 🌐 Environment Variables

`.env` file contains:
```
REACT_APP_BACKEND_URL=your_backend_url_here
```

Update this if you have a backend API.

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full 3D effects and animations
- **Tablet**: Optimized layouts
- **Mobile**: Simplified animations, touch-friendly

## 🎨 Font Usage

- **Headings**: Orbitron (Futuristic, cyberpunk style)
- **Body**: Inter (Clean, readable)

Both are loaded from Google Fonts in `index.css`.

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Change port in package.json
"start": "PORT=3001 craco start"
```

**Styles not loading:**
```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

**Dependencies issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json yarn.lock
yarn install
```

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Credits

Built with Emergent AI
Design inspired by cybersecurity and hacker aesthetics

## 📞 Contact

For questions or customization requests, refer to the contact section in the portfolio.

---

**Made with 💜 by J$P777**
