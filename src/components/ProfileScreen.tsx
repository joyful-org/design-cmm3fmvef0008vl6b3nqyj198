import { Header } from "./Header"
import { ProfileCard, SectionHeader, ContentCard, ListItem, StatCard } from "./core"
import { Shield, Bell, CreditCard, Settings, TrendingUp, Star } from "lucide-react"

export default function ProfileScreen() {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Profile" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ProfileCard
    avatar="/avatars/ava-1.png"
    name="Elena Park"
    username="elena.park"
    bio="Design lead and travel lover"
    stats={[
      { label: "Cards", value: "3" },
      { label: "Vaults", value: "5" },
      { label: "Countries", value: "18" }
    ]}
    primaryAction={{ label: "Edit Profile", onClick: () => {} }}
    secondaryAction={{ label: "Share", onClick: () => {} }}
  />

  <div className="grid grid-cols-2 gap-3">
    <StatCard label="Monthly Spend" value="$2,140" trend="down" trendValue="-6.2%" icon={<TrendingUp />} iconBg="bg-green-100" />
    <StatCard label="Reward Points" value="8,420" trend="up" trendValue="+480" icon={<Star />} iconBg="bg-yellow-100" />
  </div>

  <SectionHeader title="Account" />
  <ContentCard noPadding>
    <ListItem icon={<Shield />} title="Security" subtitle="Passcode and biometrics" rightElement="chevron" onClick={() => {}} />
    <Divider />
    <ListItem icon={<CreditCard />} title="Cards" subtitle="Manage limits and freeze" rightElement="chevron" onClick={() => {}} />
    <Divider />
    <ListItem icon={<Bell />} title="Notifications" subtitle="Push and email" rightElement="chevron" onClick={() => {}} />
    <Divider />
    <ListItem icon={<Settings />} title="Preferences" subtitle="Language and region" rightElement="chevron" onClick={() => {}} />
  </ContentCard>
</div>
      </main>
    </div>
  )
}
