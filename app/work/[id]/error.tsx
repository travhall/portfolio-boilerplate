"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { TransitionLink } from "@/components/transition-link";

export default function CaseStudyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Case study error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-6 py-16 min-h-[80vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold mb-2">
              Failed to Load Case Study
            </h1>
            <p className="text-lg text-muted-foreground">
              We couldn't load this case study. It may not exist or there was
              an error retrieving the data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <TransitionLink href="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
              </TransitionLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <TransitionLink href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </TransitionLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
