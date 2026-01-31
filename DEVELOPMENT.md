# Development Scripts and Commands

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:3000`
- Hot reload enabled
- Shows detailed error messages
- Source maps included

### Build
```bash
npm run build
```
Creates an optimized production build
- Minifies code
- Optimizes images
- Generates static files

### Production
```bash
npm start
```
Runs the production server
- Requires `npm run build` first
- Optimized for performance

### Linting
```bash
npm run lint
```
Checks code quality and style
- ESLint configuration
- TypeScript type checking

---

## 🔧 Common Development Tasks

### Adding a New Section

1. Create component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add navigation link in `Navbar.tsx`

### Updating Styles

Global styles: `src/app/globals.css`
Tailwind config: `tailwind.config.ts`

### Adding Dependencies

```bash
npm install <package-name> --legacy-peer-deps
```

### Clearing Cache

```bash
rm -rf .next
npm run dev
```

### Type Checking

```bash
npx tsc --noEmit
```

---

## 🐛 Debugging

### Development Tools

1. **React DevTools**: Browser extension for React debugging
2. **Next.js DevTools**: Built-in development overlay
3. **Three.js Inspector**: For 3D scene debugging

### Common Issues

**Port already in use:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Build errors:**
```bash
rm -rf .next
npm run build
```

---

## 📊 Performance Monitoring

### Bundle Analysis

Add to `package.json`:
```json
"analyze": "ANALYZE=true npm run build"
```

Install analyzer:
```bash
npm install @next/bundle-analyzer
```

### Lighthouse

```bash
npm install -g lighthouse
lighthouse http://localhost:3000
```

---

## 🎨 Customization Workflow

1. **Design Changes**:
   - Update Tailwind config
   - Modify component styles
   - Test responsiveness

2. **Content Updates**:
   - Edit section components
   - Update images
   - Modify text content

3. **Feature Addition**:
   - Create new component
   - Add to page
   - Test functionality
   - Update documentation

---

## 🧪 Testing (Optional Setup)

### Unit Tests

Install Jest:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### E2E Tests

Install Playwright:
```bash
npm install --save-dev @playwright/test
```

---

## 📦 Project Structure Best Practices

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   ├── ui/          # UI components
│   └── providers/   # Context providers
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
└── types/           # TypeScript types
```

---

## 🚀 Quick Commands

Start everything:
```bash
npm install --legacy-peer-deps && npm run dev
```

Fresh install:
```bash
rm -rf node_modules package-lock.json .next && npm install --legacy-peer-deps
```

Production build and start:
```bash
npm run build && npm start
```

---

## 💡 Tips

- Use `Ctrl+C` to stop the dev server
- Check browser console for errors
- Use React DevTools for component inspection
- Monitor network tab for performance
- Test on real devices, not just browser DevTools

---

Happy coding! 🎉
