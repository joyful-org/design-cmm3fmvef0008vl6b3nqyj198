import * as React from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  onClear?: () => void
  onFilterClick?: () => void
  showFilter?: boolean
  autoFocus?: boolean
  className?: string
}

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  onClear,
  onFilterClick,
  showFilter = false,
  autoFocus = false,
  className,
}: SearchBarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClear = () => {
    onChange('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div
      data-slot="search-bar"
      className={cn("relative flex items-center gap-2", className)}
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="pl-9 pr-8"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 size-7 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      {showFilter && onFilterClick && (
        <Button
          variant="outline"
          size="icon"
          onClick={onFilterClick}
        >
          <SlidersHorizontal className="size-4" />
        </Button>
      )}
    </div>
  )
}

export { SearchBar }
export type { SearchBarProps }
