import React from "react"
import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-secondary-light dark:bg-secondary-dark',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
