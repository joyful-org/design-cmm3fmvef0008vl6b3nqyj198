import * as React from "react"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  rightAction?: React.ReactNode
  noPadding?: boolean
  className?: string
}

function ContentCard({
  children,
  title,
  subtitle,
  rightAction,
  noPadding = false,
  className,
}: ContentCardProps) {
  return (
    <div
      data-slot="content-card"
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow-sm",
        className
      )}
    >
      {(title || subtitle || rightAction) && (
        <div className="flex items-start justify-between gap-4 px-4 pt-4 pb-2">
          <div className="min-w-0">
            {title && (
              <h3 className="font-semibold text-foreground">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
          {rightAction && (
            <div className="shrink-0">{rightAction}</div>
          )}
        </div>
      )}
      <div className={cn(!noPadding && "p-4", (title || subtitle) && !noPadding && "pt-2")}>
        {children}
      </div>
    </div>
  )
}

export { ContentCard }
export type { ContentCardProps }
