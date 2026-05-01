import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
} from "lucide-react"

const summaryCards = [
  {
    title: "Total Revenue",
    value: "$2.4M",
    change: "+12.5% from last month",
    icon: DollarSign,
    trend: "up" as const,
  },
  {
    title: "Active Taxpayers",
    value: "14,284",
    change: "+432 this month",
    icon: Users,
    trend: "up" as const,
  },
  {
    title: "Transactions",
    value: "8,432",
    change: "+12.3% from last week",
    icon: Activity,
    trend: "up" as const,
  },
  {
    title: "Pending Reviews",
    value: "127",
    change: "-3.2% from last week",
    icon: TrendingUp,
    trend: "down" as const,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of government payment activity and key metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {card.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue trends for the current fiscal year.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-center justify-center text-muted-foreground">
              Revenue chart will appear here
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest payment transactions processed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-3 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium">
                      Taxpayer #{1000 + i}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Income Tax Payment
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$1,250.00</p>
                    <p className="text-xs text-muted-foreground">
                      {i * 2} hours ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
