import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function WorkLoading() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mb-16">
        <Skeleton className="h-14 md:h-16 w-64 mb-6" />
        <Skeleton className="h-6 w-full max-w-xl" />
      </div>

      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <Skeleton className="h-6 w-40" />
          <div className="flex gap-4 w-full md:w-auto">
            <Skeleton className="h-10 w-full md:w-96" />
            <Skeleton className="h-10 w-full md:w-40" />
          </div>
        </div>
        <Skeleton className="h-6 w-48" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="aspect-video w-full" />
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-5 w-full mb-2" />
              <Skeleton className="h-5 w-2/3 mb-4" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
