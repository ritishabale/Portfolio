# 3D Portfolio Website

A modern, interactive portfolio website built with Next.js 14, React Three Fiber, and Framer Motion. Features stunning 3D graphics, smooth animations, and a fully responsive design.

## ✨ Features

- 🎨 **3D Graphics**: Interactive 3D elements powered by Three.js and React Three Fiber
- 🌈 **Smooth Animations**: Beautiful transitions using Framer Motion
- 🌓 **Dark/Light Mode**: Theme switching with next-themes
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized with Next.js 14
- 🎯 **Modern UI**: Glassmorphism and neon effects
- 🔧 **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion, GSAP
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## 📋 Sections

1. **Hero** - Animated 3D sphere with interactive elements
2. **About** - Professional experience and statistics
3. **Projects** - Featured projects with hover effects
4. **Skills** - Technical skills with animated progress bars
5. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd profile
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section**: `src/components/sections/Hero.tsx`
   - Name, title, description
   - Social media links

2. **About Section**: `src/components/sections/About.tsx`
   - Work experience
   - Statistics
   - Bio text

3. **Projects Section**: `src/components/sections/Projects.tsx`
   - Project details
   - Images
   - Links

4. **Skills Section**: `src/components/sections/Skills.tsx`
   - Technical skills
   - Skill levels

5. **Contact Section**: `src/components/sections/Contact.tsx`
   - Email, phone, location
   - Social links

### Theme Colors

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  neon: {
    blue: '#00d9ff',
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
  }
}
```

### Fonts

Update fonts in `src/app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
```

## 📦 Project Structure

```
profile/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx   # Navigation bar
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       └── LoadingScreen.tsx
├── public/             # Static files
├── .env.example       # Environment variables template
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Customization Tips

1. **Change 3D animations**: Edit the `AnimatedSphere` component in `Hero.tsx`
2. **Modify project cards**: Update styling in `Projects.tsx`
3. **Adjust skills display**: Customize `SkillBar` component in `Skills.tsx`
4. **Update navbar**: Modify navigation items in `Navbar.tsx`

## 🐛 Known Issues

- Three.js may show warnings in development mode (safe to ignore)
- Custom cursor is disabled on mobile devices for better UX

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have any questions or need help, feel free to open an issue.

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ and React Three Fiber
