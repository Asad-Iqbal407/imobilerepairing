"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-200 dark:bg-slate-800",
        className
      )}
    />
  );
}

export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col h-full">
      <Skeleton className="h-64 w-full rounded-none" />
      <div className="p-8 flex-1 flex flex-col gap-4">
        <Skeleton className="h-4 w-24 rounded-full" />
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-6 w-16" />
          </div>
          <Skeleton className="h-12 w-12 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export function ServiceSkeleton() {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col h-full">
      <Skeleton className="h-64 w-full rounded-none" />
      <div className="p-10 flex-grow gap-4 flex flex-col">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-1/2" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="space-y-2">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-12 w-32 rounded-2xl" />
      </div>
    </div>
  );
}
