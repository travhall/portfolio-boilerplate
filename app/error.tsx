"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { TransitionLink } from "@/components/transition-link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-6 py-16 min-h-[80vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Something Went Wrong</h1>
            <p className="text-lg text-muted-foreground mb-4">
              We encountered an unexpected error while loading this page.
            </p>
            {error.message && (
              <details className="text-left mt-6 p-4 bg-muted rounded-lg">
                <summary className="cursor-pointer font-medium text-sm text-muted-foreground hover:text-foreground">
                  Error Details
                </summary>
                <p className="mt-2 text-sm font-mono text-destructive break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Error ID: {error.digest}
                  </p>
                )}
              </details>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <TransitionLink href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </TransitionLink>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              If this problem persists, please{" "}
              <TransitionLink
                href="/contact"
                className="text-primary hover:underline"
              >
                contact support
              </TransitionLink>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
