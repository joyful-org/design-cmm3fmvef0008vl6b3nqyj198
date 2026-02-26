import { Header } from "./Header"
import { SectionHeader, ContentCard, ListItem, FormField, CheckboxField, ActionButton } from "./core"
import { Package, Truck, CreditCard } from "lucide-react"

interface CheckoutScreenProps {
  onBack?: () => void
}

export default function CheckoutScreen({ onBack }: CheckoutScreenProps) {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Checkout" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <SectionHeader title="Order Summary" />
  <ContentCard noPadding>
    <ListItem icon={<Package />} title="Premium Plan" subtitle="Monthly" rightElement="value" rightValue="$12.99" />
    <Divider />
    <ListItem icon={<Truck />} title="Delivery" subtitle="Instant access" rightElement="value" rightValue="$0.00" />
  </ContentCard>

  <SectionHeader title="Delivery Details" />
  <div className="space-y-4">
    <FormField label="Full Name" required>
      <input type="text" placeholder="Alex Morgan" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <FormField label="Address" required>
      <input type="text" placeholder="12 Market Street" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <div className="grid grid-cols-2 gap-3">
      <FormField label="City" required>
        <input type="text" placeholder="San Francisco" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </FormField>
      <FormField label="ZIP" required>
        <input type="text" placeholder="94103" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </FormField>
    </div>
  </div>

  <SectionHeader title="Payment" />
  <div className="space-y-4">
    <FormField label="Card Number" required>
      <input type="text" placeholder="4242 4242 4242 4242" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <div className="grid grid-cols-2 gap-3">
      <FormField label="Expiry" required>
        <input type="text" placeholder="10/28" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </FormField>
      <FormField label="CVC" required>
        <input type="text" placeholder="123" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </FormField>
    </div>
    <CheckboxField checked={true} onCheckedChange={() => {}} label="Save card for future payments" description="Secured with tokenization" />
  </div>

  <ActionButton fullWidth icon={<CreditCard />}>Pay $12.99</ActionButton>
</div>
      </main>
    </div>
  )
}
