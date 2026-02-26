import * as React from "react"
import { cn } from "@/lib/utils"

interface NotificationItemProps {
  icon: React.ReactNode
  iconBg?: string
  title: string
  message: string
  timestamp: string
  unread?: boolean
  onClick?: () => void
  className?: string
}

function NotificationItem({
  icon,
  iconBg,
  title,
  message,
  timestamp,
  unread = false,
  onClick,
  className,
}: NotificationItemProps) {
  const isClickable = !!onClick

  return (
    <div
      data-slot="notification-item"
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      } : undefined}
      className={cn(
        "flex items-start gap-3 py-3 px-4 -mx-4",
        isClickable && "cursor-pointer hover:bg-muted/50 active:bg-muted transition-colors",
        unread && "bg-primary/5",
        className
      )}
    >
      {/* Left: Icon */}
      <div
        className={cn(
          "flex items-center justify-center size-10 rounded-full shrink-0 mt-0.5",
          iconBg || "bg-muted"
        )}
      >
        <div className="text-foreground [&>svg]:size-5">
          {icon}
        </div>
      </div>

      {/* Center: Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <span className={cn(
            "font-medium text-foreground truncate",
            unread && "font-semibold"
          )}>
            {title}
          </span>
          <span className="text-xs text-muted-foreground shrink-0">
            {timestamp}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
          {message}
        </p>
      </div>

      {/* Unread indicator */}
      {unread && (
        <div className="shrink-0 mt-2">
          <span className="size-2 rounded-full bg-primary block" />
        </div>
      )}
    </div>
  )
}

export { NotificationItem }
export type { NotificationItemProps }
