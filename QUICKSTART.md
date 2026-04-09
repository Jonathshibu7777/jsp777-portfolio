# Quick Start Guide

## Installation (5 minutes)

### Step 1: Extract Files
```bash
tar -xzf jsp777-portfolio-complete.tar.gz
cd jsp777-portfolio
```

### Step 2: Install Dependencies
```bash
yarn install
```
*If you don't have yarn:*
```bash
npm install -g yarn
```

### Step 3: Start Development Server
```bash
yarn start
```

### Step 4: Open Browser
Open `http://localhost:3000`

---

## Customization Checklist

### ✅ Must Update
1. **Personal Info** (`src/data/mock.js`)
   - [ ] Your name
   - [ ] Your roles/titles
   - [ ] Bio text
   - [ ] Email address
   - [ ] Location

2. **Skills** (`src/data/mock.js`)
   - [ ] Add your skills
   - [ ] Update skill levels
   - [ ] Change categories

3. **Projects** (`src/data/mock.js`)
   - [ ] Replace placeholder projects
   - [ ] Add real project descriptions
   - [ ] Update technologies used

4. **Experience** (`src/data/mock.js`)
   - [ ] Add your work experience
   - [ ] Update education
   - [ ] Add certifications

5. **Social Links** (`src/data/mock.js`)
   - [ ] GitHub URL
   - [ ] LinkedIn URL
   - [ ] Twitter URL
   - [ ] Email

### 🎨 Optional Customization
- [ ] Change color scheme
- [ ] Modify typing animation speed
- [ ] Add more sections
- [ ] Change fonts
- [ ] Adjust animations

---

## File Locations Quick Reference

| What to Change | File Location |
|----------------|---------------|
| Name, Bio, Skills | `/src/data/mock.js` |
| Hero Animation | `/src/components/Hero.jsx` |
| Header Logo | `/src/components/Header.jsx` |
| Colors | `/src/index.css` & component styles |
| About Section | `/src/components/About.jsx` |
| Projects | `/src/data/mock.js` |
| Contact Form | `/src/components/Contact.jsx` |

---

## Common Commands

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Install new package
yarn add package-name

# Clear cache and reinstall
rm -rf node_modules && yarn install
```

---

## Support

If you encounter issues:
1. Check the main README.md
2. Ensure Node.js v16+ is installed
3. Try clearing node_modules and reinstalling
4. Check browser console for errors

---

**Happy Coding! 🚀**
