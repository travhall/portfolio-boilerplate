"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { caseStudies } from "@/data/case-studies";
import { TransitionLink } from "@/components/transition-link";

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <TransitionLink href="/work">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </TransitionLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <TransitionLink href="/about">About Me</TransitionLink>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects showcasing my approach to design systems,
            user experience, and interface development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <TransitionLink href={`/work/${study.id}`} key={study.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {study.images?.hero && (
                    <Image
                      src={study.images.hero}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {study.category} • {study.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.subtitle}</p>
                  <div className="flex items-center text-primary font-medium">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </TransitionLink>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <Card className="bg-card">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <Button asChild size="lg">
              <TransitionLink href="/contact">Get In Touch</TransitionLink>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
