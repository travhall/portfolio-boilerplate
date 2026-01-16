import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_Display, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LayoutContent } from "./layout-content";
import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";

// --- Font Configuration ---
// TO CHANGE FONTS: Update these google font imports and the variables below.
const fontHeading = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
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
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    ...profile.skills,
    ...siteConfig.keywords,
  ],
  authors: [{ name: profile.name, url: profile.social.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${profile.name} - ${profile.title}`,
    description: profile.tagline,
    siteName: `${profile.name}'s Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.title}`,
    description: profile.tagline,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
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
      <body className={`${fontHeading.variable} ${fontSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
