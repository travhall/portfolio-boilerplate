import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyContent } from "./case-study-content";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export default async function CaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  return (
    <div>
      <h1>{study.title}</h1>
      <CaseStudyContent study={study} />
    </div>
  );
}
