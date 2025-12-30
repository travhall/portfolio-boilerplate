import { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Work",
  description: `Explore ${profile.name}'s portfolio of UX/UI design and development projects. Case studies showcasing design systems, eCommerce solutions, SaaS platforms, and mobile apps.`,
  openGraph: {
    title: `Work - ${profile.name}`,
    description: "Case studies showcasing my approach to solving complex design and development challenges.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Work - ${profile.name}`,
    description: "Case studies showcasing my approach to solving complex design and development challenges.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
