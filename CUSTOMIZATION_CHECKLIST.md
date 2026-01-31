# 🎯 Customization Checklist

Use this checklist to personalize your portfolio website.

## 📝 Content Updates

### Hero Section (`src/components/sections/Hero.tsx`)
- [ ] Line 53: Update your name
- [ ] Line 60: Update your job title
- [ ] Line 67: Update your description
- [ ] Lines 88-106: Update social media links
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Email address

### About Section (`src/components/sections/About.tsx`)
- [ ] Lines 8-27: Update work experience
  - [ ] Years and dates
  - [ ] Job titles
  - [ ] Company names
  - [ ] Descriptions
- [ ] Lines 29-34: Update statistics
  - [ ] Projects completed
  - [ ] Awards
  - [ ] Years of experience
- [ ] Line 66: Update "About Me" heading
- [ ] Line 69: Update bio paragraph

### Projects Section (`src/components/sections/Projects.tsx`)
- [ ] Lines 8-66: Update all 6 projects
  - [ ] Project titles
  - [ ] Descriptions
  - [ ] Technologies used
  - [ ] Images (replace Unsplash URLs)
  - [ ] GitHub repository links
  - [ ] Live demo links

### Skills Section (`src/components/sections/Skills.tsx`)
- [ ] Lines 9-35: Update skills
  - [ ] Frontend skills and levels
  - [ ] Backend skills and levels
  - [ ] Tools & other skills

### Contact Section (`src/components/sections/Contact.tsx`)
- [ ] Lines 8-23: Update contact information
  - [ ] Email address
  - [ ] Phone number
  - [ ] Location
- [ ] Lines 25-29: Update social links
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Twitter URL
- [ ] Line 44: Update email in clipboard copy function

### Navbar (`src/components/layout/Navbar.tsx`)
- [ ] Line 53: Update logo/brand name (currently `<Dev/>`)

### Layout (`src/app/layout.tsx`)
- [ ] Line 18: Update page title
- [ ] Line 19: Update description
- [ ] Line 20: Update keywords
- [ ] Line 21: Update author name
- [ ] Lines 22-25: Update Open Graph metadata

---

## 🎨 Design Customization

### Colors (`tailwind.config.ts`)
- [ ] Lines 21-26: Update neon colors
  - [ ] `neon.blue`
  - [ ] `neon.purple`
  - [ ] `neon.pink`
  - [ ] `neon.cyan`

### Fonts (`src/app/layout.tsx`)
- [ ] Lines 7-14: Change fonts if desired
  - Currently using Inter and Space Grotesk

### Animations (`src/app/globals.css`)
- [ ] Adjust animation speeds
- [ ] Modify glow effects
- [ ] Change gradient colors

---

## 🖼️ Images

### Replace Placeholder Images
All project images use Unsplash. Replace with your own:

1. Add images to `public/projects/` folder
2. Update image paths in `Projects.tsx`
3. Recommended size: 800x600px
4. Use WebP format for best performance

### Add Favicon
- [ ] Create favicon.ico
- [ ] Add to `public/` folder
- [ ] Create different sizes for devices

### Add OG Image
- [ ] Create Open Graph image (1200x630px)
- [ ] Add to `public/` folder
- [ ] Update path in `layout.tsx`

---

## 🔧 Functionality

### Contact Form
Currently a mock form. To make it functional:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```
- [ ] Create EmailJS account
- [ ] Add credentials to `.env.local`
- [ ] Update Contact.tsx with EmailJS code

**Option 2: API Route**
- [ ] Create `src/app/api/contact/route.ts`
- [ ] Set up email service (SendGrid, Resend, etc.)
- [ ] Update form submission handler

### Analytics
- [ ] Add Google Analytics
- [ ] Add to `layout.tsx`
- [ ] Set up tracking events

---

## 🌐 SEO & Meta

### Meta Tags
- [ ] Update all meta descriptions
- [ ] Add keywords
- [ ] Create robots.txt
- [ ] Create sitemap.xml

### Social Media
- [ ] Create Open Graph images
- [ ] Test with social media debuggers
- [ ] Add Twitter Card meta tags

---

## 📱 Testing

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Devices
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Features
- [ ] All links work
- [ ] 3D animations load
- [ ] Theme toggle works
- [ ] Navigation scrolls correctly
- [ ] Contact form validates
- [ ] Images load properly
- [ ] Responsive design works

---

## 🚀 Pre-Deployment

### Code Quality
- [ ] Run `npm run lint`
- [ ] Fix all linting errors
- [ ] Remove console.logs
- [ ] Check for unused imports

### Performance
- [ ] Optimize images
- [ ] Check bundle size
- [ ] Test loading speed
- [ ] Run Lighthouse audit

### Environment
- [ ] Update `.env.local` with production values
- [ ] Add environment variables to hosting platform
- [ ] Remove sensitive data from code

### Final Checks
- [ ] Test on production build (`npm run build && npm start`)
- [ ] Verify all external links
- [ ] Check all images load
- [ ] Test form submission
- [ ] Verify analytics tracking

---

## 📦 Deployment

- [ ] Choose hosting platform (Vercel recommended)
- [ ] Connect GitHub repository
- [ ] Set environment variables
- [ ] Deploy
- [ ] Test production URL
- [ ] Set up custom domain (optional)
- [ ] Configure DNS

---

## ✅ Post-Deployment

- [ ] Share on social media
- [ ] Add to LinkedIn
- [ ] Update GitHub profile README
- [ ] Submit to portfolio showcases
- [ ] Monitor analytics
- [ ] Gather feedback
- [ ] Plan improvements

---

## 🎓 Learning Resources

### Next.js
- [Official Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Three.js
- [Three.js Journey](https://threejs-journey.com/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)

### Animations
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Learning](https://greensock.com/learning)

---

**Good luck with your portfolio! 🚀**

Remember: Start with content updates, then customize the design, and finally deploy!
