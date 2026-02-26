import { Header } from "./Header"
import { AmountInput, SectionHeader, ContentCard, ContactItem, TextArea, ActionButton, ListItem } from "./core"
import { Send, User, Clock } from "lucide-react"

interface SendScreenProps {
  onBack?: () => void
}

export default function SendScreen({ onBack }: SendScreenProps) {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Send Money" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <AmountInput value="" onChange={() => {}} label="Amount" currency="USD" currencySymbol="$" />

  <SectionHeader title="Choose Recipient" action={{ label: "New", onClick: () => {} }} />
  <ContentCard noPadding>
    <ContactItem avatar="/avatars/ava-2.png" name="Sam Rivera" subtitle="@samr" status="online" onClick={() => {}} />
    <Divider />
    <ContactItem avatar="/avatars/ava-3.png" name="Jordan Lee" subtitle="@jordanl" status="away" onClick={() => {}} />
    <Divider />
    <ContactItem avatar="/avatars/ava-4.png" name="Priya Singh" subtitle="@priyas" status="offline" onClick={() => {}} />
  </ContentCard>

  <TextArea label="Note" placeholder="What is this for" rows={3} />

  <ContentCard title="Summary" subtitle="Estimated arrival">
    <div className="space-y-2">
      <ListItem icon={<User />} title="Recipient" rightElement="value" rightValue="Sam Rivera" />
      <ListItem icon={<Clock />} title="Arrives" rightElement="value" rightValue="Instant" />
    </div>
  </ContentCard>

  <ActionButton fullWidth icon={<Send />}>Review Send</ActionButton>
</div>
      </main>
    </div>
  )
}
