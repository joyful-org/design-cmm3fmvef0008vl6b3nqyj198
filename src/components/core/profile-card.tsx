import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface ProfileStat {
  label: string
  value: string
}

interface ProfileCardProps {
  avatar?: string
  name: string
  username?: string
  bio?: string
  stats?: ProfileStat[]
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  className?: string
}

function ProfileCard({
  avatar,
  name,
  username,
  bio,
  stats,
  primaryAction,
  secondaryAction,
  className,
}: ProfileCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <Card
      data-slot="profile-card"
      className={cn("py-5", className)}
    >
      <CardContent className="p-0 px-5">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <Avatar className="size-20">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-xl font-semibold">{initials}</AvatarFallback>
          </Avatar>

          {/* Name and Username */}
          <h3 className="font-semibold text-lg text-foreground mt-3">{name}</h3>
          {username && (
            <p className="text-sm text-muted-foreground">@{username}</p>
          )}

          {/* Bio */}
          {bio && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{bio}</p>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border w-full">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="flex items-center gap-2 mt-4 w-full">
              {primaryAction && (
                <Button
                  onClick={primaryAction.onClick}
                  className="flex-1"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="outline"
                  onClick={secondaryAction.onClick}
                  className="flex-1"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { ProfileCard }
export type { ProfileCardProps, ProfileStat }
