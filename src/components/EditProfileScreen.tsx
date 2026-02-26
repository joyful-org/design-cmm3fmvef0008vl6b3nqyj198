import { Header } from "./Header"
import { ContentCard, Avatar, FormField, TextArea, ToggleSwitch, ActionButton } from "./core"
import { User } from "lucide-react"

interface EditProfileScreenProps {
  onBack?: () => void
}

export default function EditProfileScreen({ onBack }: EditProfileScreenProps) {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Edit Profile" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard>
    <div className="flex items-center gap-4">
      <Avatar src="/avatars/ava-1.png" alt="Elena" size="lg" />
      <div className="space-y-1">
        <div className="text-base font-semibold text-foreground">Elena Park</div>
        <div className="text-xs text-muted-foreground">@elena.park</div>
      </div>
    </div>
  </ContentCard>

  <div className="space-y-4">
    <FormField label="Full Name" required>
      <input type="text" placeholder="Elena Park" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <FormField label="Email" required>
      <input type="email" placeholder="elena@revolut.com" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <FormField label="Phone" required>
      <input type="tel" placeholder="+1 415 555 0134" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <FormField label="New Password">
      <input type="password" placeholder="••••••••" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none" />
    </FormField>
    <TextArea label="Bio" placeholder="Tell us a bit about you" rows={3} />
    <ToggleSwitch checked={true} onCheckedChange={() => {}} label="Show profile to contacts" description="Friends can find you faster" />
  </div>

  <ActionButton fullWidth icon={<User />}>Save Changes</ActionButton>
</div>
      </main>
    </div>
  )
}
