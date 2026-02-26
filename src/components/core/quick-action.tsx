import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface QuickActionProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'default' | 'primary'
  className?: string
}

function QuickAction({
  icon,
  label,
  onClick,
  disabled = false,
  variant = 'default',
  className,
}: QuickActionProps) {
  return (
    <Button
      data-slot="quick-action"
      variant="ghost"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex flex-col items-center justify-center h-auto py-3 px-2 gap-1.5 min-w-[72px]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center size-12 rounded-full",
          variant === 'primary' ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
        )}
      >
        <div className="[&>svg]:size-5">
          {icon}
        </div>
      </div>
      <span className="text-xs font-medium text-foreground">{label}</span>
    </Button>
  )
}

export { QuickAction }
export type { QuickActionProps }
