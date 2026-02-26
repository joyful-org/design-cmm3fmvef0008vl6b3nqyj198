import { useState } from "react"
import { Home, Clock, User, Settings } from "lucide-react"
import { BottomTabs } from "./components/BottomTabs"
import SplashScreen from "./components/SplashScreen"
import LoginScreen from "./components/LoginScreen"
import HomeScreen from "./components/HomeScreen"
import ActivityScreen from "./components/ActivityScreen"
import ProfileScreen from "./components/ProfileScreen"
import SettingsScreen from "./components/SettingsScreen"
import SendScreen from "./components/SendScreen"
import ConfirmSendScreen from "./components/ConfirmSendScreen"
import BuyScreen from "./components/BuyScreen"
import CheckoutScreen from "./components/CheckoutScreen"
import TransactionDetailScreen from "./components/TransactionDetailScreen"
import EditProfileScreen from "./components/EditProfileScreen"

const tabs = [
  { id: "homeScreen", label: "Home", icon: Home },
  { id: "activityScreen", label: "Activity", icon: Clock },
  { id: "profileScreen", label: "Profile", icon: User },
  { id: "settingsScreen", label: "Settings", icon: Settings },
]

const tabScreenIds = ["homeScreen", "activityScreen", "profileScreen", "settingsScreen"]

export default function App() {
  const [activeScreen, setActiveScreen] = useState("homeScreen")
  const [screenHistory, setScreenHistory] = useState<string[]>([])

  // Navigate to a new screen (pushes to history)
  const navigateTo = (screenId: string) => {
    setScreenHistory(prev => [...prev, activeScreen])
    setActiveScreen(screenId)
  }

  // Go back to previous screen
  const goBack = () => {
    if (screenHistory.length > 0) {
      const newHistory = [...screenHistory]
      const previousScreen = newHistory.pop()!
      setScreenHistory(newHistory)
      setActiveScreen(previousScreen)
    }
  }

  // Handle tab changes (clears history since tabs are top-level)
  const handleTabChange = (screenId: string) => {
    setScreenHistory([])
    setActiveScreen(screenId)
  }

  return (
    <div
      className="flex flex-col bg-background overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div className="flex-1 min-h-0">
      {activeScreen === "splashScreen" && <SplashScreen />}
      {activeScreen === "loginScreen" && <LoginScreen />}
      {activeScreen === "homeScreen" && <HomeScreen />}
      {activeScreen === "activityScreen" && <ActivityScreen />}
      {activeScreen === "profileScreen" && <ProfileScreen />}
      {activeScreen === "settingsScreen" && <SettingsScreen />}
      {activeScreen === "sendScreen" && <SendScreen onBack={goBack} />}
      {activeScreen === "confirmSendScreen" && <ConfirmSendScreen onBack={goBack} />}
      {activeScreen === "buyScreen" && <BuyScreen onBack={goBack} />}
      {activeScreen === "checkoutScreen" && <CheckoutScreen onBack={goBack} />}
      {activeScreen === "transactionDetailScreen" && <TransactionDetailScreen onBack={goBack} />}
      {activeScreen === "editProfileScreen" && <EditProfileScreen onBack={goBack} />}
      </div>
      {tabScreenIds.includes(activeScreen) && (
        <BottomTabs tabs={tabs} activeTab={activeScreen} onTabChange={handleTabChange} />
      )}
    </div>
  )
}
