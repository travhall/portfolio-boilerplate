import { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Blog",
  description: `Read ${profile.name}'s thoughts on design, development, and building great products. Tutorials, insights, and best practices.`,
  openGraph: {
    title: `Blog - ${profile.name}`,
    description: "Thoughts on design, development, and building great products.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog - ${profile.name}`,
    description: "Thoughts on design, development, and building great products.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
