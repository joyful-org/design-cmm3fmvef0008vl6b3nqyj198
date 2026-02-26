import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

type LoadingVariant = 'spinner' | 'skeleton' | 'dots'

interface LoadingStateProps {
  variant?: LoadingVariant
  text?: string
  count?: number
  className?: string
}

function LoadingSpinner({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2 className="size-8 animate-spin text-primary" />
      {text && (
        <p className="text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  )
}

function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="size-2 rounded-full bg-primary animate-bounce"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  )
}

function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

function LoadingState({
  variant = 'spinner',
  text,
  count = 3,
  className,
}: LoadingStateProps) {
  return (
    <div
      data-slot="loading-state"
      className={cn(
        "flex items-center justify-center py-8 px-4",
        className
      )}
    >
      {variant === 'spinner' && <LoadingSpinner text={text} />}
      {variant === 'dots' && <LoadingDots />}
      {variant === 'skeleton' && <LoadingSkeleton count={count} />}
    </div>
  )
}

export { LoadingState }
export type { LoadingStateProps, LoadingVariant }
