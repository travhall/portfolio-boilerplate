# Portfolio Boilerplate

A modern, production-ready portfolio website boilerplate built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features smooth page transitions, a comprehensive UI component library, and a focus on accessibility and performance.

## ✨ Features

### Core Technologies
- **Next.js 16** with App Router for modern React architecture
- **React 19** with concurrent features and latest optimizations
- **TypeScript 5.9** with strict mode for type safety
- **Tailwind CSS 4** with modern CSS-first configuration
- **OKLch color system** for perceptually uniform colors
- **Framer Motion** for smooth page transitions and animations

### Design & UX
- 🎨 **Complete Design System** with 40+ shadcn/ui components
- 🌗 **Light/Dark theme** with system preference detection
- ♿ **Accessible** with ARIA labels, focus states, and keyboard navigation
- 📱 **Fully responsive** mobile-first design
- ⚡ **Smooth page transitions** with customizable presets
- 🎯 **SEO optimized** with centralized `siteConfig`
- 🔡 **Font Contract Pattern** for easy typography swapping

### Performance
- 🚀 **Static generation** for optimal performance
- 🖼️ **Image optimization** with Next.js Image component
- 📦 **Code splitting** and tree shaking
- ⏱️ **Loading states** with skeleton loaders
- 💾 **Type-safe** data structures

### Pages & Components
- **Home** - Hero section with featured work
- **Work** - Filterable and sortable project gallery
- **Case Studies** - Detailed project breakdowns with metrics, testimonials, and phases
- **About** - Bio, skills, and experience timeline
- **Contact** - Multiple contact methods and availability info
- **Style Guide** - Component showcase for reference
- **404 Page** - Custom error page with navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   > **Note:** Supabase is optional. The boilerplate works with static data by default.

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Centralized Site Configuration

Edit `/config/site.ts` to update global site information, navigation, and SEO settings:

```typescript
export const siteConfig = {
  name: "Your Portfolio Name",
  description: "Your site description...",
  url: "https://your-domain.com",
  ogImage: "https://your-domain.com/og.jpg",
  twitterHandle: "@yourusername",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    // ...
  ],
  keywords: ["design", "development", "portfolio"],
};
```

### 2. Update Profile Information

Edit `/data/profile.ts` to update your personal information:

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline here",
  email: "your.email@example.com",
  location: "Your Location",
  bio: "Your bio...",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // ... other social links
  },
  skills: ["Skill 1", "Skill 2", "..."],
  experience: [
    // ... your experience
  ],
};
```

### 3. Add Your Projects

Edit `/data/case-studies.ts` to add your projects:

```typescript
export const caseStudies: CaseStudy[] = [
  {
    id: "project-slug",
    title: "Project Title",
    subtitle: "Project Subtitle",
    category: "Category Name",
    year: "2024",
    description: "Brief description...",
    challenge: "The challenge...",
    solution: "The solution...",
    outcome: "The outcome...",
    role: ["Role 1", "Role 2"],
    tools: ["Tool 1", "Tool 2"],
    duration: "X months",
    highlights: ["Highlight 1", "Highlight 2"],
    images: {
      hero: "https://your-image-url.com/hero.jpg",
      gallery: ["image1.jpg", "image2.jpg"],
    },
    metrics: [
      {
        label: "Metric Name",
        before: "Before value",
        after: "After value",
        improvement: "+XX%",
      },
    ],
    // ... testimonials, teamMembers, projectPhases (optional)
  },
];
```

### 4. Update Contact Information

Edit `/data/contact.ts` to customize your contact page.

### 5. Customize Theme Colors

Edit `/app/globals.css` to modify your color scheme:

```css
:root {
  --primary: 55% 0.15 260; /* OKLch: Lightness Chroma Hue */
  --background: 98% 0 0;
  /* ... other colors */
}
```

### 6. Swapping Fonts (Font Contract Pattern)

Changing fonts is as easy as updating the Google Font import in `/app/layout.tsx`. The rest of the app uses CSS variables (`--font-heading`, `--font-sans`):

1.  **Import new font** in `/app/layout.tsx`.
2.  **Assign to variable** in font configuration section.
3.  **Update CSS mapping** in `/app/globals.css` if necessary.

```typescript
// app/layout.tsx
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

### 7. Configure Page Transitions

Edit `/config/transitions.ts` to customize animations:

```typescript
export const pageTransitionConfig = {
  preset: "slideUpFade", // fade, slideUp, slideDown, scale, blur, etc.
  duration: 0.3,
  ease: "easeInOut",
  delay: 0,
};
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm test             # Run tests (Vitest)
npm run test:e2e     # Run end-to-end tests (Playwright)
```

## 📁 Project Structure

```
portfolio-boilerplate/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout & Font Configuration
│   ├── globals.css          # Global styles & Font Contract
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── work/                # Work gallery
│   └── styleguide/          # Expanded Component showcase
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── navigation.tsx       # Navigation (consumes siteConfig)
│   ├── footer.tsx           # Footer (consumes siteConfig)
│   └── ...
├── data/                    # User Content
│   ├── profile.ts           # Bio, stats, experience
│   ├── case-studies.ts      # Detailed project data
│   └── contact.ts           # Contact page content
├── config/                  # Global Configuration
│   ├── site.ts              # SE0, Nav, and Site Metadata
│   └── transitions.ts       # Animation config
├── lib/                     # Utilities
└── public/                  # Static assets
```

## 🎨 UI Components

This boilerplate includes 40+ pre-built components from shadcn/ui:

- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch
- **Navigation**: Navigation Menu, Tabs, Breadcrumb
- **Feedback**: Alert, Toast, Dialog, Alert Dialog
- **Data Display**: Card, Badge, Avatar, Table, Accordion
- **Layout**: Separator, Scroll Area, Aspect Ratio
- And many more...

See `/app/styleguide` for a complete showcase.

## 🔧 Adding New Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcin@latest add dropdown-menu
```

## 🖼️ Image Optimization

Next.js Image component is configured to optimize images from:
- `images.pexels.com` (placeholder images)
- `api.dicebear.com` (avatar generation)

To add more domains, edit `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "your-domain.com",
    },
  ],
},
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in `.next/` directory. Deploy this to any static hosting platform.

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and live regions
- Keyboard navigation support
- Focus-visible states
- Skip links
- Color contrast compliance
- Screen reader optimizations

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm test              # Run tests
npm test -- --watch   # Watch mode
npm test -- --coverage # Coverage report
```

### End-to-End Tests (Playwright)

```bash
npm run test:e2e           # Run all E2E tests
npm run test:e2e:ui        # Open Playwright UI
npm run test:e2e:debug     # Debug mode
```

## 📄 License

MIT License - feel free to use this boilerplate for your own portfolio!

## 🤝 Contributing

This is a boilerplate project intended to be forked and customized. If you find bugs or have suggestions for improvements, please open an issue or pull request.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled accessible components

---

Made with ❤️ using modern web technologies. Happy building!
