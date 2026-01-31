# Deployment Guide

This guide covers deployment options for your 3D portfolio website.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

### Environment Variables:

Add these in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your production URL
- Any other variables from `.env.example`

---

## 📦 Netlify

### Steps:

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Environment variables**: Add from `.env.example`

### Netlify Configuration:

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🐳 Docker

### Dockerfile:

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ☁️ AWS Amplify

### Steps:

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Add environment variables
5. Deploy

---

## 🌐 Static Export (GitHub Pages, etc.)

If you want a static export:

1. **Update `next.config.js`**:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. **Build**:
```bash
npm run build
```

3. **Deploy the `out` folder** to any static hosting service

---

## 📊 Performance Tips

1. **Image Optimization**:
   - Use WebP format for images
   - Optimize image sizes
   - Use Next.js Image component

2. **Code Splitting**:
   - Use dynamic imports for heavy components
   - Lazy load 3D components

3. **Caching**:
   - Enable caching headers
   - Use CDN for static assets

4. **Analytics**:
   - Add Google Analytics
   - Monitor Core Web Vitals

---

## 🔒 Security

1. **Environment Variables**:
   - Never commit `.env.local`
   - Use secrets management in production

2. **Headers**:
   - Add security headers in `next.config.js`

3. **Rate Limiting**:
   - Implement rate limiting for contact form

---

## 🛠️ Maintenance

### Update Dependencies:

```bash
npm update
npm audit fix
```

### Monitor Performance:

- Use Lighthouse
- Check bundle size
- Monitor loading times

### Backup:

- Regular GitHub commits
- Database backups (if applicable)

---

## 📞 Support

If you encounter issues during deployment:

1. Check build logs
2. Verify environment variables
3. Test locally first
4. Check documentation for your hosting platform

---

## 🎯 Post-Deployment Checklist

- [ ] Test all pages
- [ ] Verify 3D animations work
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify theme switching
- [ ] Check all links
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Set up analytics
- [ ] Configure custom domain (optional)

---

Good luck with your deployment! 🚀
