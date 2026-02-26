import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"

interface HeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  rightAction?: React.ReactNode
}

export function Header({ title, showBack, onBack, rightAction }: HeaderProps) {
  return (
    <header className="bg-background border-b border-border shrink-0">
      <div className="h-12" />
      <div className="flex items-center justify-between px-4 pb-2">
        <div className="flex items-center gap-2 min-w-[40px]">
          {showBack && (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        <div className="min-w-[40px] flex justify-end">
          {rightAction}
        </div>
      </div>
    </header>
  )
}
