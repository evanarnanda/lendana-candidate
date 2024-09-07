import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BioDataSkeleton() {
  return (
    <Card x-chunk="dashboard-profile-settings-bio-data-skeleton">
      <CardHeader>
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-3 w-36" />
      </CardHeader>
      <CardContent className="grid grid-rows-3 grid-flow-col gap-6">
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-40" />
      </div>
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div className="grid gap-3">

      </div>
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>

      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div className="grid gap-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-36" />
      </div>
      </CardContent>
    </Card>
  );
}
