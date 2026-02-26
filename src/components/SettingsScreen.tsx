import { Header } from "./Header"
import { SectionHeader, ContentCard, ListItem, Divider } from "./core"
import { Bell, Lock, Globe, Smartphone, CreditCard, Users, Link, Trash2 } from "lucide-react"

export default function SettingsScreen() {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Settings" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <SectionHeader title="Preferences" />
  <ContentCard noPadding>
    <ListItem icon={<Bell />} title="Notifications" rightElement="switch" switchChecked={true} onSwitchChange={() => {}} />
    <Divider />
    <ListItem icon={<Globe />} title="Language" rightElement="value" rightValue="English" onClick={() => {}} />
    <Divider />
    <ListItem icon={<Smartphone />} title="Devices" subtitle="2 active sessions" rightElement="chevron" onClick={() => {}} />
  </ContentCard>

  <SectionHeader title="Privacy" />
  <ContentCard noPadding>
    <ListItem icon={<Lock />} title="App Lock" rightElement="switch" switchChecked={true} onSwitchChange={() => {}} />
    <Divider />
    <ListItem icon={<Users />} title="Connected Accounts" subtitle="3 linked" rightElement="chevron" onClick={() => {}} />
    <Divider />
    <ListItem icon={<Link />} title="Payment Methods" subtitle="Visa •••• 4242" rightElement="chevron" onClick={() => {}} />
  </ContentCard>

  <SectionHeader title="Danger Zone" />
  <ContentCard noPadding>
    <ListItem icon={<Trash2 />} title="Close Account" subtitle="Remove all data" rightElement="chevron" onClick={() => {}} />
  </ContentCard>
</div>
      </main>
    </div>
  )
}
