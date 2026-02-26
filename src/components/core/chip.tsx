import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type ChipVariant = 'default' | 'primary' | 'secondary' | 'outline'

interface ChipProps {
  children: React.ReactNode
  variant?: ChipVariant
  icon?: React.ReactNode
  selected?: boolean
  onRemove?: () => void
  onClick?: () => void
  disabled?: boolean
  className?: string
}

function Chip({
  children,
  variant = 'default',
  icon,
  selected = false,
  onRemove,
  onClick,
  disabled = false,
  className,
}: ChipProps) {
  const isInteractive = !!onClick || !!onRemove

  const variantClasses: Record<ChipVariant, string> = {
    default: selected
      ? 'bg-primary text-primary-foreground border-primary'
      : 'bg-muted text-foreground border-transparent',
    primary: 'bg-primary text-primary-foreground border-primary',
    secondary: 'bg-secondary text-secondary-foreground border-secondary',
    outline: selected
      ? 'bg-primary/10 text-primary border-primary'
      : 'bg-transparent text-foreground border-border',
  }

  const Component = onClick ? 'button' : 'span'

  return (
    <Component
      data-slot="chip"
      type={onClick ? 'button' : undefined}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-medium",
        "transition-colors",
        isInteractive && !disabled && "cursor-pointer",
        onClick && !disabled && "hover:opacity-80",
        disabled && "opacity-50 cursor-not-allowed",
        variantClasses[variant],
        className
      )}
    >
      {icon && (
        <span className="[&>svg]:size-3.5">{icon}</span>
      )}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          disabled={disabled}
          className={cn(
            "ml-0.5 -mr-1 rounded-full p-0.5",
            "hover:bg-foreground/10 transition-colors",
            disabled && "pointer-events-none"
          )}
        >
          <X className="size-3" />
        </button>
      )}
    </Component>
  )
}

export { Chip }
export type { ChipProps, ChipVariant }
