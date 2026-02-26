import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  label: string
  htmlFor?: string
  error?: string
  hint?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

function FormField({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  children,
  className,
}: FormFieldProps) {
  const id = htmlFor || React.useId()

  return (
    <div
      data-slot="form-field"
      className={cn("space-y-2", className)}
    >
      <Label
        htmlFor={id}
        className={cn(
          "text-sm font-medium",
          error && "text-destructive"
        )}
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>

      {/* Clone children to pass id and aria attributes */}
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<{
            id?: string
            'aria-invalid'?: boolean
            'aria-describedby'?: string
          }>, {
            id,
            'aria-invalid': !!error,
            'aria-describedby': error ? `${id}-error` : hint ? `${id}-hint` : undefined,
          })
        : children
      }

      {hint && !error && (
        <p
          id={`${id}-hint`}
          className="text-sm text-muted-foreground"
        >
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="text-sm text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export { FormField }
export type { FormFieldProps }
