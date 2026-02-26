import { Header } from "./Header"
import { ContentCard, SectionHeader, ListItem, ActionButton } from "./core"
import { Calendar, Clock, Hash, ShieldCheck, Download } from "lucide-react"

interface TransactionDetailScreenProps {
  onBack?: () => void
}

export default function TransactionDetailScreen({ onBack }: TransactionDetailScreenProps) {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Transaction Details" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard title="Transaction" subtitle="Completed">
    <div className="text-3xl font-semibold text-foreground">-$42.10</div>
    <div className="text-sm text-muted-foreground">Market Central • Card payment</div>
  </ContentCard>

  <SectionHeader title="Details" />
  <ContentCard noPadding>
    <ListItem icon={<Calendar />} title="Date" rightElement="value" rightValue="Feb 24, 2026" />
    <Divider />
    <ListItem icon={<Clock />} title="Time" rightElement="value" rightValue="5:41 PM" />
    <Divider />
    <ListItem icon={<ShieldCheck />} title="Status" rightElement="value" rightValue="Completed" />
    <Divider />
    <ListItem icon={<Hash />} title="Reference" rightElement="value" rightValue="RVL-8H2K1" />
  </ContentCard>

  <ActionButton fullWidth variant="outline" icon={<Download />}>Download receipt</ActionButton>
</div>
      </main>
    </div>
  )
}
