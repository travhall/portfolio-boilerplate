import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyContent } from "./case-study-content";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  const description = `${study.subtitle} - ${study.description}`;
  const keywords = [
    study.category,
    ...study.tools,
    ...study.role,
    "case study",
    "portfolio",
  ];

  return {
    title: study.title,
    description,
    keywords,
    openGraph: {
      title: `${study.title} - ${profile.name}`,
      description,
      type: "article",
      images: study.images?.hero ? [{ url: study.images.hero }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description,
      images: study.images?.hero ? [study.images.hero] : [],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  return (
    <div>
      <CaseStudyContent study={study} />
    </div>
  );
}
