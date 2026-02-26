import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SectionHeaderProps {
  title: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

function SectionHeader({ title, action, className }: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      className={cn("flex items-center justify-between py-2", className)}
    >
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
        {title}
      </h3>
      {action && (
        <Button
          variant="ghost"
          size="sm"
          onClick={action.onClick}
          className="text-primary hover:text-primary/80 -mr-2"
        >
          {action.label}
        </Button>
      )}
    </div>
  )
}

export { SectionHeader }
export type { SectionHeaderProps }
