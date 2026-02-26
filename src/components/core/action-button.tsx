import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"

interface ActionButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
}

function ActionButton({
  children,
  icon,
  iconPosition = 'left',
  loading = false,
  loadingText,
  fullWidth = false,
  variant = 'default',
  size = 'default',
  disabled,
  className,
  ...props
}: ActionButtonProps) {
  const isDisabled = disabled || loading

  return (
    <Button
      data-slot="action-button"
      variant={variant}
      size={size}
      disabled={isDisabled}
      className={cn(
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          {loadingText || children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="[&>svg]:size-4">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="[&>svg]:size-4">{icon}</span>
          )}
        </>
      )}
    </Button>
  )
}

export { ActionButton }
export type { ActionButtonProps }
