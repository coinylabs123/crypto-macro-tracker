import { cn } from "@/lib/utils";

interface SkeletonWidgetProps {
  className?: string;
  height?: string;
}

export function SkeletonWidget({ className, height = "h-80" }: SkeletonWidgetProps) {
  return (
    <div
      className={cn(
        "w-full animate-pulse rounded-md bg-muted/50", 
        height,
        className
      )}
    />
  );
}
