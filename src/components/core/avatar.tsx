import * as React from "react"
import { cn } from "@/lib/utils"

type AvatarSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: AvatarSize
  status?: 'online' | 'offline' | 'away'
  className?: string
}

function Avatar({
  src,
  alt,
  fallback,
  size = 'default',
  status,
  className,
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  const sizeClasses: Record<AvatarSize, string> = {
    xs: 'size-6 text-xs',
    sm: 'size-8 text-sm',
    default: 'size-10 text-sm',
    lg: 'size-12 text-base',
    xl: 'size-16 text-lg',
  }

  const statusSizeClasses: Record<AvatarSize, string> = {
    xs: 'size-1.5 border',
    sm: 'size-2 border-[1.5px]',
    default: 'size-2.5 border-2',
    lg: 'size-3 border-2',
    xl: 'size-4 border-2',
  }

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-muted-foreground',
    away: 'bg-yellow-500',
  }

  const initials = fallback || alt?.split(' ').map(n => n.charAt(0)).slice(0, 2).join('').toUpperCase() || '?'

  return (
    <div
      data-slot="avatar"
      className={cn("relative inline-flex shrink-0", className)}
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-muted overflow-hidden",
          sizeClasses[size]
        )}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || 'Avatar'}
            onError={() => setImageError(true)}
            className="size-full object-cover"
          />
        ) : (
          <span className="font-medium text-muted-foreground">
            {initials}
          </span>
        )}
      </div>
      {status && statusColors[status] && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-background",
            statusSizeClasses[size],
            statusColors[status]
          )}
        />
      )}
    </div>
  )
}

export { Avatar }
export type { AvatarProps, AvatarSize }
