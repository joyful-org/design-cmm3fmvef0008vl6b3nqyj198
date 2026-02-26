import { Header } from "./Header"
import { AmountInput, SectionHeader, ContentCard, ListItem, StatCard, ActionButton, ProgressBar } from "./core"
import { Bitcoin, Coins, TrendingUp, ArrowUpDown } from "lucide-react"

interface BuyScreenProps {
  onBack?: () => void
}

export default function BuyScreen({ onBack }: BuyScreenProps) {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Buy Cryptocurrency" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <AmountInput value="" onChange={() => {}} label="Buy Amount" currency="USD" currencySymbol="$" />

  <ContentCard title="Selected Asset" subtitle="Live price">
    <ListItem icon={<Bitcoin />} title="Bitcoin" subtitle="BTC" rightElement="value" rightValue="$61,420" onClick={() => {}} />
    <div className="mt-3">
      <ProgressBar value={34} label="Market volatility" showValue variant="warning" />
    </div>
  </ContentCard>

  <SectionHeader title="Market" />
  <div className="grid grid-cols-2 gap-3">
    <StatCard label="24h Change" value="+3.2%" trend="up" trendValue="+$1,920" icon={<TrendingUp />} iconBg="bg-green-100" />
    <StatCard label="Spread" value="0.35%" trend="neutral" trendValue="Low" icon={<ArrowUpDown />} iconBg="bg-blue-100" />
  </div>

  <ContentCard title="Other Coins" subtitle="Popular">
    <div className="space-y-2">
      <ListItem icon={<Coins />} title="Ethereum" subtitle="ETH" rightElement="value" rightValue="$3,280" onClick={() => {}} />
      <ListItem icon={<Coins />} title="Solana" subtitle="SOL" rightElement="value" rightValue="$142" onClick={() => {}} />
    </div>
  </ContentCard>

  <ActionButton fullWidth>Continue to Buy</ActionButton>
</div>
      </main>
    </div>
  )
}
