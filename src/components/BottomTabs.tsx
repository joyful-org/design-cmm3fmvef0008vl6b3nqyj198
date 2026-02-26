import { type LucideIcon } from "lucide-react"
import { cn } from "../lib/utils"

interface Tab {
  id: string
  label: string
  icon: LucideIcon
}

interface BottomTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function BottomTabs({ tabs, activeTab, onTabChange }: BottomTabsProps) {
  return (
    <nav className="bg-background border-t border-border shrink-0">
      <div className="flex items-center justify-around h-16 pt-3">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="size-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
      <div className="h-6" /> {/* Safe area spacer */}
    </nav>
  )
}
