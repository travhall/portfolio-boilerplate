import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CaseStudyLoading() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <Skeleton className="h-9 w-32 mb-6" />
          <div className="max-w-4xl">
            <Skeleton className="h-4 w-48 mb-4" />
            <Skeleton className="h-12 md:h-14 w-3/4 mb-4" />
            <Skeleton className="h-7 w-full max-w-2xl" />
          </div>
        </div>
      </div>

      <Skeleton className="w-full aspect-video" />

      <div className="container mx-auto px-6 py-16">
        <div className="mb-16">
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <Skeleton className="h-12 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mx-auto mb-1" />
                  <Skeleton className="h-3 w-1/2 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <Skeleton className="h-10 w-40 mb-6" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-6 w-3/4" />
          </div>

          <div>
            <Skeleton className="h-10 w-32 mb-6" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-6 w-full mb-3" />
            <Skeleton className="h-6 w-2/3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-24" />
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
