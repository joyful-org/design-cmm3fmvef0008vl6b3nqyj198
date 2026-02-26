import { ScreenHeader, FormField, CheckboxField, ActionButton, Divider, ContentCard, ListItem } from "./core"
import { Fingerprint, KeyRound, UserPlus, HelpCircle } from "lucide-react"

export default function LoginScreen() {
  return (
    <div
      className="flex flex-col min-h-0 overflow-y-auto bg-background"
      style={{ height: '100%' }}
    >
      <div className="flex flex-col h-full bg-background">
  <ScreenHeader title="Login" centered />
  <div className="flex-1 overflow-y-auto p-4 space-y-6">
    <div className="space-y-4">
      <FormField label="Email" required>
        <input type="email" placeholder="name@email.com" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </FormField>
      <FormField label="Password" required>
        <input type="password" placeholder="Your password" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
      </FormField>
      <CheckboxField checked={true} onCheckedChange={() => {}} label="Remember this device" description="We will keep you signed in" />
      <ActionButton fullWidth>Continue</ActionButton>
      <Divider label="OR" />
      <ActionButton fullWidth variant="secondary" icon={<Fingerprint />}>Use biometrics</ActionButton>
    </div>
    <ContentCard noPadding>
      <ListItem icon={<KeyRound />} title="Forgot password" subtitle="Reset in minutes" rightElement="chevron" onClick={() => {}} />
      <Divider />
      <ListItem icon={<UserPlus />} title="Create account" subtitle="New to Revolut" rightElement="chevron" onClick={() => {}} />
      <Divider />
      <ListItem icon={<HelpCircle />} title="Need help" subtitle="Contact support" rightElement="chevron" onClick={() => {}} />
    </ContentCard>
  </div>
</div>
    </div>
  )
}
