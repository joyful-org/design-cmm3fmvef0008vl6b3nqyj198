import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps {
  value: number
  max?: number
  size?: 'sm' | 'default' | 'lg'
  showValue?: boolean
  reviewCount?: number
  onChange?: (value: number) => void
  readonly?: boolean
  className?: string
}

function Rating({
  value,
  max = 5,
  size = 'default',
  showValue = false,
  reviewCount,
  onChange,
  readonly = true,
  className,
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const sizeClasses = {
    sm: 'size-3.5',
    default: 'size-4',
    lg: 'size-5',
  }

  const displayValue = hoverValue ?? value

  const handleClick = (starIndex: number) => {
    if (!readonly && onChange) {
      onChange(starIndex + 1)
    }
  }

  return (
    <div
      data-slot="rating"
      className={cn("inline-flex items-center gap-1", className)}
    >
      <div
        className="flex items-center gap-0.5"
        onMouseLeave={() => setHoverValue(null)}
      >
        {Array.from({ length: max }).map((_, index) => {
          const filled = index < Math.floor(displayValue)
          const partial = !filled && index < displayValue
          const partialWidth = partial ? (displayValue - index) * 100 : 0

          return (
            <button
              key={index}
              type="button"
              disabled={readonly}
              onClick={() => handleClick(index)}
              onMouseEnter={() => !readonly && setHoverValue(index + 1)}
              className={cn(
                "relative",
                !readonly && "cursor-pointer hover:scale-110 transition-transform",
                readonly && "cursor-default"
              )}
            >
              {/* Background star (empty) */}
              <Star
                className={cn(
                  sizeClasses[size],
                  "text-muted-foreground/30"
                )}
              />
              {/* Foreground star (filled) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? '100%' : `${partialWidth}%` }}
              >
                <Star
                  className={cn(
                    sizeClasses[size],
                    "fill-yellow-400 text-yellow-400"
                  )}
                />
              </div>
            </button>
          )
        })}
      </div>

      {showValue && (
        <span className="text-sm font-medium ml-1 tabular-nums">
          {value.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className="text-sm text-muted-foreground">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  )
}

export { Rating }
export type { RatingProps }
