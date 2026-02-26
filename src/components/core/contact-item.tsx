import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type ContactStatus = 'online' | 'offline' | 'away'

interface ContactItemProps {
  avatar?: string
  name: string
  subtitle?: string
  status?: ContactStatus
  rightElement?: React.ReactNode
  onClick?: () => void
  className?: string
}

function ContactItem({
  avatar,
  name,
  subtitle,
  status,
  rightElement,
  onClick,
  className,
}: ContactItemProps) {
  const isClickable = !!onClick

  const statusColors: Record<ContactStatus, string> = {
    online: 'bg-green-500',
    offline: 'bg-muted-foreground',
    away: 'bg-yellow-500',
  }

  const initials = name
    .split(' ')
    .map((n) => n.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div
      data-slot="contact-item"
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
        "flex items-center gap-3 py-3 px-4 -mx-4",
        isClickable && "cursor-pointer hover:bg-muted/50 active:bg-muted transition-colors",
        className
      )}
    >
      {/* Left: Avatar with status indicator */}
      <div className="relative shrink-0">
        <Avatar className="size-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-sm font-medium">{initials}</AvatarFallback>
        </Avatar>
        {status && statusColors[status] && (
          <span
            className={cn(
              "absolute bottom-0 right-0 size-3 rounded-full border-2 border-background",
              statusColors[status]
            )}
          />
        )}
      </div>

      {/* Center: Name and Subtitle */}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground truncate">{name}</div>
        {subtitle && (
          <div className="text-sm text-muted-foreground truncate">{subtitle}</div>
        )}
      </div>

      {/* Right: Optional element */}
      {rightElement && (
        <div className="shrink-0">{rightElement}</div>
      )}
    </div>
  )
}

export { ContactItem }
export type { ContactItemProps, ContactStatus }
