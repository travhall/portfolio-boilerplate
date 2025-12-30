import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TransitionLink } from "@/components/transition-link";
import { Home, ArrowLeft, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-[80vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
            <p className="text-lg text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <TransitionLink href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </TransitionLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <TransitionLink href="/work">
                <Search className="mr-2 h-4 w-4" />
                Browse Work
              </TransitionLink>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <TransitionLink href="/contact">
                Get In Touch
              </TransitionLink>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              If you believe this is a mistake, please{" "}
              <TransitionLink
                href="/contact"
                className="text-primary hover:underline"
              >
                contact me
              </TransitionLink>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
