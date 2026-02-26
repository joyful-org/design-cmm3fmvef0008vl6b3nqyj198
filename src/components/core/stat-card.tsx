import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

type TrendType = 'up' | 'down' | 'neutral'

interface StatCardProps {
  label: string
  value: string
  trend?: TrendType
  trendValue?: string
  icon?: React.ReactNode
  iconBg?: string
  className?: string
}

function StatCard({
  label,
  value,
  trend,
  trendValue,
  icon,
  iconBg,
  className,
}: StatCardProps) {
  const trendConfig: Record<TrendType, { icon: React.ReactNode; color: string }> = {
    up: {
      icon: <TrendingUp className="size-3.5" />,
      color: 'text-green-600 dark:text-green-500'
    },
    down: {
      icon: <TrendingDown className="size-3.5" />,
      color: 'text-red-600 dark:text-red-500'
    },
    neutral: {
      icon: <Minus className="size-3.5" />,
      color: 'text-muted-foreground'
    },
  }

  return (
    <Card
      data-slot="stat-card"
      className={cn("py-4", className)}
    >
      <CardContent className="p-0 px-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {trend && trendValue && trendConfig[trend] && (
              <div className={cn("flex items-center gap-1 text-sm", trendConfig[trend].color)}>
                {trendConfig[trend].icon}
                <span>{trendValue}</span>
              </div>
            )}
          </div>

          {icon && (
            <div
              className={cn(
                "flex items-center justify-center size-10 rounded-full shrink-0",
                iconBg || "bg-primary/10"
              )}
            >
              <div className="text-primary [&>svg]:size-5">
                {icon}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { StatCard }
export type { StatCardProps, TrendType }
