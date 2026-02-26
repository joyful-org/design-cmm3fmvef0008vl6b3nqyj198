import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AmountInputProps {
  value: string
  onChange: (value: string) => void
  currency?: string
  currencySymbol?: string
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  className?: string
}

function AmountInput({
  value,
  onChange,
  currency,
  currencySymbol = "$",
  placeholder = "0.00",
  label,
  error,
  disabled = false,
  className,
}: AmountInputProps) {
  const id = React.useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    // Allow empty string, numbers, and decimal point
    if (inputValue === '' || /^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue)
    }
  }

  return (
    <div
      data-slot="amount-input"
      className={cn("space-y-2", className)}
    >
      {label && (
        <Label htmlFor={id} className={cn(error && "text-destructive")}>
          {label}
        </Label>
      )}

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground pointer-events-none">
          {currencySymbol}
        </span>
        <Input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          className={cn(
            "pl-8 text-2xl font-bold h-14",
            currency && "pr-16"
          )}
        />
        {currency && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground pointer-events-none">
            {currency}
          </span>
        )}
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export { AmountInput }
export type { AmountInputProps }
