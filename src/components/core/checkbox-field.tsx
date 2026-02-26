import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckboxFieldProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
  description?: string
  disabled?: boolean
  className?: string
}

function CheckboxField({
  checked,
  onCheckedChange,
  label,
  description,
  disabled = false,
  className,
}: CheckboxFieldProps) {
  const id = React.useId()

  return (
    <div
      data-slot="checkbox-field"
      className={cn("flex items-start gap-3", className)}
    >
      <button
        id={id}
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2",
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-input bg-transparent"
        )}
      >
        {checked && <Check className="size-3.5" strokeWidth={3} />}
      </button>
      <div className="flex-1 min-w-0">
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-medium text-foreground cursor-pointer",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => !disabled && onCheckedChange(!checked)}
        >
          {label}
        </label>
        {description && (
          <p className={cn(
            "text-sm text-muted-foreground mt-0.5",
            disabled && "opacity-50"
          )}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export { CheckboxField }
export type { CheckboxFieldProps }
