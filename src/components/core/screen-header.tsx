import * as React from "react"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ScreenHeaderAction {
  icon: React.ReactNode
  onClick: () => void
  label?: string
}

interface ScreenHeaderProps {
  title: string
  subtitle?: string
  showBack?: boolean
  onBack?: () => void
  rightActions?: ScreenHeaderAction[]
  transparent?: boolean
  centered?: boolean
  className?: string
}

function ScreenHeader({
  title,
  subtitle,
  showBack = false,
  onBack,
  rightActions,
  transparent = false,
  centered = false,
  className,
}: ScreenHeaderProps) {
  return (
    <div
      data-slot="screen-header"
      className={cn(
        "flex items-center gap-2 py-3 px-4 -mx-4 min-h-[56px]",
        !transparent && "bg-background border-b border-border",
        className
      )}
    >
      {/* Left: Back button */}
      {showBack && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="-ml-2 shrink-0"
        >
          <ChevronLeft className="size-6" />
        </Button>
      )}

      {/* Center: Title and subtitle */}
      <div
        className={cn(
          "flex-1 min-w-0",
          centered && "text-center",
          showBack && centered && "-ml-10"
        )}
      >
        <h1 className="text-lg font-semibold text-foreground truncate">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
        )}
      </div>

      {/* Right: Actions */}
      {rightActions && rightActions.length > 0 && (
        <div className="flex items-center gap-1 shrink-0 -mr-2">
          {rightActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={action.onClick}
              aria-label={action.label}
            >
              <div className="[&>svg]:size-5">{action.icon}</div>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export { ScreenHeader }
export type { ScreenHeaderProps, ScreenHeaderAction }
