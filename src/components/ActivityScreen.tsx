import { Header } from "./Header"
import { SearchBar, Chip, SectionHeader, TransactionItem } from "./core"
import { Coffee, ShoppingBag, Home, Car, Zap, Wallet } from "lucide-react"

export default function ActivityScreen() {
  return (
    <div className="flex flex-col min-h-0 overflow-hidden" style={{ height: '100%' }}>
      <Header title="Activity" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <SearchBar value="" onChange={() => {}} placeholder="Search transactions" showFilter onFilterClick={() => {}} />

  <div className="flex gap-2 overflow-x-auto pb-2">
    <Chip selected onClick={() => {}}>All</Chip>
    <Chip onClick={() => {}}>Income</Chip>
    <Chip onClick={() => {}}>Bills</Chip>
    <Chip onClick={() => {}}>Food</Chip>
    <Chip onClick={() => {}}>Transport</Chip>
    <Chip onClick={() => {}}>Shopping</Chip>
  </div>

  <SectionHeader title="This Week" />
  <div className="space-y-1">
    <TransactionItem icon={<Coffee />} iconBg="bg-orange-100" title="Cafe Luna" subtitle="Today, 9:10 AM" amount="-$4.80" amountType="negative" />
    <TransactionItem icon={<ShoppingBag />} iconBg="bg-yellow-100" title="Harbor Mall" subtitle="Today, 12:45 PM" amount="-$128.30" amountType="negative" />
    <TransactionItem icon={<Wallet />} iconBg="bg-green-100" title="Salary Deposit" subtitle="Feb 23, 2026" amount="+$3,200.00" amountType="positive" status="completed" />
  </div>

  <SectionHeader title="Earlier" />
  <div className="space-y-1">
    <TransactionItem icon={<Home />} iconBg="bg-blue-100" title="Rent" subtitle="Feb 20, 2026" amount="-$1,450.00" amountType="negative" status="completed" />
    <TransactionItem icon={<Car />} iconBg="bg-purple-100" title="City Parking" subtitle="Feb 18, 2026" amount="-$18.00" amountType="negative" />
    <TransactionItem icon={<Zap />} iconBg="bg-blue-100" title="Utilities" subtitle="Feb 16, 2026" amount="-$92.15" amountType="negative" status="completed" />
  </div>
</div>
      </main>
    </div>
  )
}
