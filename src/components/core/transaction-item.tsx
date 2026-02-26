import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type AmountType = 'positive' | 'negative' | 'neutral'
type TransactionStatus = 'pending' | 'completed' | 'failed'

interface TransactionItemProps {
  icon: React.ReactNode
  iconBg?: string
  title: string
  subtitle: string
  amount: string
  amountType?: AmountType
  status?: TransactionStatus
  onClick?: () => void
  className?: string
}

function TransactionItem({
  icon,
  iconBg,
  title,
  subtitle,
  amount,
  amountType = 'neutral',
  status,
  onClick,
  className,
}: TransactionItemProps) {
  const isClickable = !!onClick

  const amountColors: Record<AmountType, string> = {
    positive: 'text-green-600 dark:text-green-500',
    negative: 'text-foreground',
    neutral: 'text-muted-foreground',
  }

  const statusConfig: Record<TransactionStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
    pending: { label: 'Pending', variant: 'secondary' },
    completed: { label: 'Completed', variant: 'outline' },
    failed: { label: 'Failed', variant: 'destructive' },
  }

  return (
    <div
      data-slot="transaction-item"
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
      {/* Left: Icon */}
      <div
        className={cn(
          "flex items-center justify-center size-10 rounded-full shrink-0",
          iconBg || "bg-muted"
        )}
      >
        <div className="text-foreground [&>svg]:size-5">
          {icon}
        </div>
      </div>

      {/* Center: Title and Subtitle */}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground truncate">{title}</div>
        <div className="text-sm text-muted-foreground truncate">{subtitle}</div>
      </div>

      {/* Right: Amount and Status */}
      <div className="flex flex-col items-end shrink-0">
        <span className={cn("font-semibold", amountColors[amountType] || amountColors.neutral)}>
          {amount}
        </span>
        {status && statusConfig[status] && (
          <Badge variant={statusConfig[status].variant} className="mt-0.5 text-[10px] px-1.5">
            {statusConfig[status].label}
          </Badge>
        )}
      </div>
    </div>
  )
}

export { TransactionItem }
export type { TransactionItemProps, AmountType, TransactionStatus }
