import * as React from "react"
import { cn } from "@/lib/utils"

interface ToggleSwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
  description?: string
  disabled?: boolean
  className?: string
}

function ToggleSwitch({
  checked,
  onCheckedChange,
  label,
  description,
  disabled = false,
  className,
}: ToggleSwitchProps) {
  const id = React.useId()

  return (
    <div
      data-slot="toggle-switch"
      className={cn("flex items-center justify-between gap-4", className)}
    >
      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "text-sm font-medium text-foreground",
                disabled && "opacity-50"
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={cn(
              "text-sm text-muted-foreground",
              disabled && "opacity-50"
            )}>
              {description}
            </p>
          )}
        </div>
      )}
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-primary" : "bg-input"
        )}
      >
        <span
          className={cn(
            "pointer-events-none block size-5 rounded-full bg-background shadow-sm transition-transform",
            checked ? "translate-x-[22px]" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  )
}

export { ToggleSwitch }
export type { ToggleSwitchProps }
