import * as React from "react"
import { cn } from "@/lib/utils"

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
  label?: string
  error?: string
  hint?: string
}

function TextArea({
  label,
  error,
  hint,
  disabled,
  className,
  ...props
}: TextAreaProps) {
  const id = React.useId()

  return (
    <div data-slot="text-area" className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-medium",
            error ? "text-destructive" : "text-foreground"
          )}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          "flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2",
          "text-base placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...props}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export { TextArea }
export type { TextAreaProps }
