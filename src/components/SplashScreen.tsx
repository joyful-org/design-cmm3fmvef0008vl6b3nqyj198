import { ScreenHeader, ActionButton, LoadingState } from "./core"
import { Wallet } from "lucide-react"

export default function SplashScreen() {
  return (
    <div
      className="flex flex-col min-h-0 overflow-y-auto bg-background"
      style={{ height: '100%' }}
    >
      <div className="flex flex-col h-full bg-background">
  <ScreenHeader title="Welcome to Revolut" centered transparent />
  <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-between">
    <div className="space-y-6 w-full">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
        <Wallet className="h-10 w-10 text-foreground" />
      </div>
      <div className="text-center space-y-2">
        <div className="text-2xl font-semibold text-foreground">One app for your money</div>
        <div className="text-sm text-muted-foreground">Send, exchange, and manage spending in seconds.</div>
      </div>
      <LoadingState variant="dots" text="Securing your session" />
    </div>
    <div className="w-full space-y-3">
      <ActionButton fullWidth>Get Started</ActionButton>
      <ActionButton fullWidth variant="outline">Log In</ActionButton>
    </div>
  </div>
</div>
    </div>
  )
}
