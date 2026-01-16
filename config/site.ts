export const siteConfig = {
  name: "Portfolio Boilerplate",
  description: "A modern, production-ready portfolio website boilerplate.",
  url: "https://portfolio-boilerplate.vercel.app",
  ogImage: "https://portfolio-boilerplate.vercel.app/og.jpg",
  twitterHandle: "@alexrivera",
  links: {
    github: "https://github.com/travhall/portfolio-boilerplate",
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  keywords: [
    "portfolio",
    "UX design",
    "UI development",
    "web development",
    "design systems",
  ],
};

export type SiteConfig = typeof siteConfig;
