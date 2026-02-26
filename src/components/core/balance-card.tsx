import * as React from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ChangeType = 'positive' | 'negative' | 'neutral'

interface BalanceAction {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

interface BalanceCardProps {
  label: string
  amount: string
  currency?: string
  change?: string
  changeType?: ChangeType
  actions?: BalanceAction[]
  className?: string
}

function BalanceCard({
  label,
  amount,
  currency,
  change,
  changeType = 'neutral',
  actions,
  className,
}: BalanceCardProps) {
  const changeColors: Record<ChangeType, string> = {
    positive: 'text-green-600 dark:text-green-500',
    negative: 'text-red-600 dark:text-red-500',
    neutral: 'text-muted-foreground',
  }

  return (
    <Card
      data-slot="balance-card"
      className={cn("py-5 bg-gradient-to-br from-primary/10 via-transparent to-transparent", className)}
    >
      <CardContent className="p-0 px-5">
        <p className="text-sm text-muted-foreground">{label}</p>

        <div className="flex items-baseline gap-1.5 mt-1">
          {currency && (
            <span className="text-2xl font-bold text-foreground">{currency}</span>
          )}
          <span className="text-4xl font-bold text-foreground tracking-tight">
            {amount}
          </span>
        </div>

        {change && (
          <div className={cn("flex items-center gap-1 mt-2 text-sm", changeColors[changeType] || changeColors.neutral)}>
            {changeType === 'positive' && <TrendingUp className="size-4" />}
            {changeType === 'negative' && <TrendingDown className="size-4" />}
            <span>{change}</span>
          </div>
        )}

        {actions && actions.length > 0 && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="secondary"
                size="sm"
                onClick={action.onClick}
                className="flex-1"
              >
                <span className="[&>svg]:size-4">{action.icon}</span>
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export { BalanceCard }
export type { BalanceCardProps, BalanceAction, ChangeType }
