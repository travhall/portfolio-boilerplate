"use client";

import Image from "next/image";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CaseStudy } from "@/data/case-studies";
import { useState, useEffect } from "react";
import { TransitionLink } from "@/components/transition-link";

interface CaseStudyContentProps {
  study: CaseStudy;
}

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getProgressValue = (improvement: string) => {
    const num = parseFloat(improvement.replace(/[^0-9.-]/g, ""));
    return Math.min(Math.abs(num), 100);
  };

  return (
    <div>
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <TransitionLink href="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </TransitionLink>
          </Button>

          <div className="max-w-4xl">
            <div className="text-sm text-muted-foreground mb-4">
              {study.category} • {study.year}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground">{study.subtitle}</p>
          </div>
        </div>
      </div>

      {study.images?.hero && (
        <div className="w-full aspect-video bg-muted overflow-hidden relative">
          <Image
            src={study.images.hero}
            alt={study.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      <div className="container mx-auto px-6 py-16">
        {study.metrics && study.metrics.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {study.metrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-muted-foreground">
                          Before
                        </span>
                        <span className="text-sm font-medium">
                          {metric.before}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-muted-foreground">
                          After
                        </span>
                        <span className="text-lg font-bold">
                          {metric.after}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">Improvement</span>
                        <div className="flex items-center gap-1">
                          {metric.improvement.startsWith("+") ? (
                            <TrendingUp className="h-3 w-3 text-green-600" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-green-600" />
                          )}
                          <span className="text-sm font-bold text-green-600">
                            {metric.improvement}
                          </span>
                        </div>
                      </div>
                      {/* Temporarily disabled due to Next.js 13.5.1 build bug
                      {mounted && (
                        <Progress
                          value={getProgressValue(metric.improvement)}
                          className="h-2"
                        />
                      )} */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <Alert>
                    <AlertDescription className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </AlertDescription>
                  </Alert>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {study.highlights.map((highlight, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {highlight.split(":")[0] || `Highlight ${index + 1}`}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {highlight}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Outcome & Impact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.outcome}
                  </p>
                  {study.metrics && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Before vs After Comparison
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Metric</TableHead>
                              <TableHead className="text-right">
                                Before
                              </TableHead>
                              <TableHead className="text-right">
                                After
                              </TableHead>
                              <TableHead className="text-right">
                                Change
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {study.metrics.map((metric, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">
                                  {metric.label}
                                </TableCell>
                                <TableCell className="text-right">
                                  {metric.before}
                                </TableCell>
                                <TableCell className="text-right font-semibold">
                                  {metric.after}
                                </TableCell>
                                <TableCell className="text-right">
                                  <Badge
                                    variant={
                                      metric.improvement.startsWith("+")
                                        ? "default"
                                        : "secondary"
                                    }
                                  >
                                    {metric.improvement}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Duration</div>
                      <div className="font-medium">{study.duration}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-muted-foreground mb-1">Category</div>
                      <div className="font-medium">{study.category}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-muted-foreground mb-1">Year</div>
                      <div className="font-medium">{study.year}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>My Role</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {study.role.map((r) => (
                        <Badge key={r} variant="secondary">
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <Tooltip key={tool}>
                            <TooltipTrigger>
                              <Badge variant="outline">{tool}</Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Technology used: {tool}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">
                Project Timeline & Process
              </h2>
              {study.projectPhases && study.projectPhases.length > 0 ? (
                <div className="space-y-6">
                  {study.projectPhases.map((phase, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle>{phase.name}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                {phase.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {phase.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Alert>
                  <AlertDescription>
                    This project followed a collaborative design and development
                    process, with iterative feedback loops and continuous
                    stakeholder engagement.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </TabsContent>

          <TabsContent value="team" className="mt-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">Team Members</h2>
              {study.teamMembers && study.teamMembers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.teamMembers.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="flex items-center gap-4 p-6">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {member.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Collaborative Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      This project was developed in collaboration with a
                      cross-functional team including designers, developers,
                      product managers, and stakeholders.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="mt-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">Client Testimonials</h2>
              {study.testimonials && study.testimonials.length > 0 ? (
                <div className="space-y-6">
                  {study.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-8">
                        <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {testimonial.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Alert>
                  <AlertDescription>
                    Client testimonials for this project are being collected and
                    will be available soon.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {study.images?.gallery && study.images.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {study.images.gallery.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="aspect-video bg-muted overflow-hidden rounded-lg relative">
                      <Image
                        src={image}
                        alt={`${study.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}

        <Card className="bg-card">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <TransitionLink href="/contact">Get In Touch</TransitionLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <TransitionLink href="/work">View More Work</TransitionLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
