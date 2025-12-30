"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {profile.bio}
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {profile.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
