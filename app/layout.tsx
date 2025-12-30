import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_Display, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LayoutContent } from "./layout-content";
import { profile } from "@/data/profile";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const themeInitializer = `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ?? (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
  } catch (error) {}
})();
`;

export const metadata: Metadata = {
  title: {
    default: `${profile.name} - ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    ...profile.skills,
    "portfolio",
    "UX design",
    "UI development",
    "web development",
    "design systems",
  ],
  authors: [{ name: profile.name, url: profile.social.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${profile.name} - ${profile.title}`,
    description: profile.tagline,
    siteName: `${profile.name}'s Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.title}`,
    description: profile.tagline,
    creator: "@alexrivera",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitializer }}
        />
      </head>
      <body className={`${notoSerifDisplay.variable} ${manrope.variable}`}>
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
