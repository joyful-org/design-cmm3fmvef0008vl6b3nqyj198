import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ActionCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  iconBg?: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  className?: string
}

function ActionCard({
  title,
  description,
  icon,
  iconBg,
  primaryAction,
  secondaryAction,
  className,
}: ActionCardProps) {
  return (
    <Card
      data-slot="action-card"
      className={cn("py-4", className)}
    >
      <CardContent className="p-0 px-4">
        <div className="flex gap-4">
          {icon && (
            <div
              className={cn(
                "flex items-center justify-center size-12 rounded-full shrink-0",
                iconBg || "bg-primary/10"
              )}
            >
              <div className="text-primary [&>svg]:size-6">
                {icon}
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>

            {(primaryAction || secondaryAction) && (
              <div className="flex items-center gap-2 mt-3">
                {primaryAction && (
                  <Button size="sm" onClick={primaryAction.onClick}>
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export { ActionCard }
export type { ActionCardProps }
