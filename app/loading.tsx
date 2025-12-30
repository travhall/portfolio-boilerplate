import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div>
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <Skeleton className="h-16 md:h-20 w-3/4 mb-6" />
          <Skeleton className="h-8 md:h-10 w-full max-w-2xl mb-8" />
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <CardContent className="p-6">
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-40" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
