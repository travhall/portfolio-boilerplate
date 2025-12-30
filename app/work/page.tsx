"use client";

import { ArrowRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { caseStudies } from "@/data/case-studies";
import { useState, useMemo } from "react";
import { TransitionLink } from "@/components/transition-link";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("year-desc");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(caseStudies.map((study) => study.category))
    );
    return ["all", ...uniqueCategories];
  }, []);

  const filteredAndSortedStudies = useMemo(() => {
    let filtered = caseStudies;

    if (selectedCategory !== "all") {
      filtered = caseStudies.filter(
        (study) => study.category === selectedCategory
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "year-desc":
          return parseInt(b.year) - parseInt(a.year);
        case "year-asc":
          return parseInt(a.year) - parseInt(b.year);
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Selected Work
        </h1>
        <p className="text-xl text-muted-foreground">
          Case studies showcasing my approach to solving complex design and
          development challenges.
        </p>
      </div>

      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <ToggleGroup
              type="single"
              value={selectedCategory}
              onValueChange={(value) => value && setSelectedCategory(value)}
              className="justify-start flex-wrap"
            >
              {categories.map((category) => (
                <ToggleGroupItem
                  key={category}
                  value={category}
                  aria-label={`Filter by ${category}`}
                  className="capitalize"
                >
                  {category}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-50">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="year-desc">Newest First</SelectItem>
                <SelectItem value="year-asc">Oldest First</SelectItem>
                <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                <SelectItem value="title-desc">Title (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">
            Showing {filteredAndSortedStudies.length}{" "}
            {filteredAndSortedStudies.length === 1 ? "project" : "projects"}
          </span>
          {selectedCategory !== "all" && (
            <Badge variant="secondary" className="capitalize">
              {selectedCategory}
            </Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredAndSortedStudies.map((study) => (
          <TransitionLink href={`/work/${study.id}`} key={study.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {study.images?.hero && (
                  <img
                    src={study.images.hero}
                    alt={study.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {study.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {study.year}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                <p className="text-muted-foreground mb-4">{study.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {study.description}
                </p>
                {study.metrics && study.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.metrics.slice(0, 2).map((metric, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {metric.label}: {metric.improvement}
                      </Badge>
                    ))}
                    {study.metrics.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{study.metrics.length - 2} more
                      </Badge>
                    )}
                  </div>
                )}
                <div className="flex items-center text-primary font-medium">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </TransitionLink>
        ))}
      </div>

      {filteredAndSortedStudies.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">
            No projects found matching your filters. Try selecting a different
            category.
          </p>
        </Card>
      )}
    </div>
  );
}
