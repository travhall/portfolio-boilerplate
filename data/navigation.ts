export interface NavigationLink {
  href: string;
  label: string;
}

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
