import * as React from "react"
import { cn } from "@/lib/utils"

type ProgressBarVariant = 'default' | 'success' | 'warning' | 'destructive'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  variant?: ProgressBarVariant
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  variant = 'default',
  size = 'default',
  className,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const variantClasses: Record<ProgressBarVariant, string> = {
    default: 'bg-primary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    destructive: 'bg-destructive',
  }

  const sizeClasses = {
    sm: 'h-1',
    default: 'h-2',
    lg: 'h-3',
  }

  return (
    <div data-slot="progress-bar" className={cn("space-y-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && (
            <span className="font-medium text-foreground">{label}</span>
          )}
          {showValue && (
            <span className="text-muted-foreground tabular-nums">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-muted",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}

export { ProgressBar }
export type { ProgressBarProps, ProgressBarVariant }
