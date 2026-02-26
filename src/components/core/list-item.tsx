import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

type RightElementType = 'chevron' | 'switch' | 'badge' | 'value' | React.ReactNode

interface ListItemProps {
  icon?: React.ReactNode
  iconBg?: string
  avatar?: string
  avatarFallback?: string
  title: string
  subtitle?: string
  rightElement?: RightElementType
  rightValue?: string
  badgeText?: string
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
  switchChecked?: boolean
  onSwitchChange?: (checked: boolean) => void
  onClick?: () => void
  disabled?: boolean
  className?: string
}

function ListItem({
  icon,
  iconBg,
  avatar,
  avatarFallback,
  title,
  subtitle,
  rightElement,
  rightValue,
  badgeText,
  badgeVariant = 'secondary',
  switchChecked,
  onSwitchChange,
  onClick,
  disabled = false,
  className,
}: ListItemProps) {
  const isClickable = !!onClick && !disabled

  const renderRightElement = () => {
    if (rightElement === 'chevron') {
      return <ChevronRight className="size-5 text-muted-foreground" />
    }
    if (rightElement === 'switch') {
      return (
        <Switch
          checked={switchChecked}
          onCheckedChange={onSwitchChange}
          onClick={(e) => e.stopPropagation()}
        />
      )
    }
    if (rightElement === 'badge' && badgeText) {
      return <Badge variant={badgeVariant}>{badgeText}</Badge>
    }
    if (rightElement === 'value' && rightValue) {
      return (
        <span className="text-sm font-medium text-muted-foreground">
          {rightValue}
        </span>
      )
    }
    if (rightElement && typeof rightElement !== 'string') {
      return rightElement
    }
    return null
  }

  return (
    <div
      data-slot="list-item"
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={isClickable ? onClick : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      } : undefined}
      className={cn(
        "flex items-center gap-3 py-3 px-4 -mx-4",
        isClickable && "cursor-pointer hover:bg-muted/50 active:bg-muted transition-colors",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {/* Left: Icon or Avatar */}
      {(icon || avatar) && (
        <div className="shrink-0">
          {avatar ? (
            <Avatar className="size-10">
              <AvatarImage src={avatar} alt={title} />
              <AvatarFallback>{avatarFallback || title.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : icon ? (
            <div
              className={cn(
                "flex items-center justify-center size-10 rounded-full",
                iconBg || "bg-muted"
              )}
            >
              <div className="text-foreground [&>svg]:size-5">
                {icon}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Center: Title and Subtitle */}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground truncate">{title}</div>
        {subtitle && (
          <div className="text-sm text-muted-foreground truncate">{subtitle}</div>
        )}
      </div>

      {/* Right: Element */}
      {renderRightElement()}
    </div>
  )
}

export { ListItem }
export type { ListItemProps }
