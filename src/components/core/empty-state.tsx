import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        "flex flex-col items-center justify-center text-center py-12 px-6",
        className
      )}
    >
      <div className="flex items-center justify-center size-16 rounded-full bg-muted mb-4">
        <div className="text-muted-foreground [&>svg]:size-8">
          {icon}
        </div>
      </div>

      <h3 className="font-semibold text-lg text-foreground">{title}</h3>

      {description && (
        <p className="text-sm text-muted-foreground mt-1 max-w-[280px]">
          {description}
        </p>
      )}

      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.label}
        </Button>
      )}
    </div>
  )
}

export { EmptyState }
export type { EmptyStateProps }
