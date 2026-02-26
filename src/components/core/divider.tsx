import * as React from "react"
import { cn } from "@/lib/utils"

interface DividerProps {
  label?: string
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

function Divider({
  label,
  orientation = 'horizontal',
  className,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        data-slot="divider"
        className={cn("w-px bg-border self-stretch", className)}
      />
    )
  }

  if (label) {
    return (
      <div
        data-slot="divider"
        className={cn("flex items-center gap-4 my-4", className)}
      >
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          {label}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
    )
  }

  return (
    <div
      data-slot="divider"
      className={cn("h-px bg-border my-4", className)}
    />
  )
}

export { Divider }
export type { DividerProps }
