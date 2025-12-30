import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Internal reference for design system components and styling patterns.",
  robots: {
    index: false, // Don't index the style guide in search engines
    follow: false,
  },
};

export default function StyleGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
