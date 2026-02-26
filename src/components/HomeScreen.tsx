import { Header } from "./Header"
import { BalanceCard, QuickAction, SectionHeader, TransactionItem, ContentCard, ProgressBar } from "./core"
import { Send, ArrowDownLeft, ArrowLeftRight, CreditCard, Coffee, ShoppingBag, Zap } from "lucide-react"

export default function HomeScreen() {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Home" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <BalanceCard
    label="Total Balance"
    amount="12,450.20"
    currency="$"
    change="+2.4% this month"
    changeType="positive"
    actions={[
      { icon: <Send />, label: "Send", onClick: () => {} },
      { icon: <ArrowDownLeft />, label: "Receive", onClick: () => {} },
      { icon: <ArrowLeftRight />, label: "Exchange", onClick: () => {} },
      { icon: <CreditCard />, label: "Cards", onClick: () => {} }
    ]}
  />

  <div className="grid grid-cols-4 gap-2">
    <QuickAction icon={<Send />} label="Send" onClick={() => {}} />
    <QuickAction icon={<ArrowLeftRight />} label="Exchange" onClick={() => {}} />
    <QuickAction icon={<CreditCard />} label="Pay" onClick={() => {}} />
    <QuickAction icon={<ArrowDownLeft />} label="Receive" variant="primary" onClick={() => {}} />
  </div>

  <ContentCard title="Spending Plan" subtitle="Monthly budget">
    <div className="space-y-2">
      <ProgressBar value={62} label="$1,860 of $3,000" showValue />
      <div className="text-xs text-muted-foreground">Groceries and subscriptions are on track</div>
    </div>
  </ContentCard>

  <SectionHeader title="Recent Transactions" action={{ label: "See All", onClick: () => {} }} />
  <div className="space-y-1">
    <TransactionItem icon={<Coffee />} iconBg="bg-orange-100" title="Blue Bottle" subtitle="Today, 8:12 AM" amount="-$6.40" amountType="negative" />
    <TransactionItem icon={<ShoppingBag />} iconBg="bg-yellow-100" title="Market Central" subtitle="Yesterday, 5:41 PM" amount="-$42.10" amountType="negative" />
    <TransactionItem icon={<Zap />} iconBg="bg-blue-100" title="Energy Co." subtitle="Feb 24, 2026" amount="-$88.00" amountType="negative" status="completed" />
  </div>
</div>
      </main>
    </div>
  )
}
