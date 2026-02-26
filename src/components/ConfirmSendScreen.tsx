import { Header } from "./Header"
import { ContentCard, ListItem, SectionHeader, ActionButton } from "./core"
import { User, Clock, ShieldCheck, Send } from "lucide-react"

interface ConfirmSendScreenProps {
  onBack?: () => void
}

export default function ConfirmSendScreen({ onBack }: ConfirmSendScreenProps) {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Confirm Send" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard title="You are sending" subtitle="Please confirm details">
    <div className="text-3xl font-semibold text-foreground">$240.00</div>
    <div className="text-sm text-muted-foreground">USD wallet</div>
  </ContentCard>

  <SectionHeader title="Details" />
  <ContentCard noPadding>
    <ListItem icon={<User />} title="Recipient" subtitle="@samr" rightElement="value" rightValue="Sam Rivera" />
    <Divider />
    <ListItem icon={<Clock />} title="Delivery" rightElement="value" rightValue="Instant" />
    <Divider />
    <ListItem icon={<ShieldCheck />} title="Fee" rightElement="value" rightValue="$0.00" />
  </ContentCard>

  <ActionButton fullWidth icon={<Send />}>Send Money</ActionButton>
</div>
      </main>
    </div>
  )
}
