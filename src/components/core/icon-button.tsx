import * as React from "react"
import { cn } from "@/lib/utils"

type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'ghost' | 'destructive'
type IconButtonSize = 'sm' | 'default' | 'lg'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  variant?: IconButtonVariant
  size?: IconButtonSize
  label?: string
}

function IconButton({
  icon,
  variant = 'default',
  size = 'default',
  label,
  disabled,
  className,
  ...props
}: IconButtonProps) {
  const variantClasses: Record<IconButtonVariant, string> = {
    default: 'bg-muted hover:bg-muted/80 text-foreground',
    primary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
    ghost: 'hover:bg-muted text-foreground',
    destructive: 'bg-destructive hover:bg-destructive/90 text-white',
  }

  const sizeClasses: Record<IconButtonSize, string> = {
    sm: 'size-8 [&>div>svg]:size-4',
    default: 'size-10 [&>div>svg]:size-5',
    lg: 'size-12 [&>div>svg]:size-6',
  }

  return (
    <button
      data-slot="icon-button"
      type="button"
      disabled={disabled}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div>{icon}</div>
    </button>
  )
}

export { IconButton }
export type { IconButtonProps, IconButtonVariant, IconButtonSize }
