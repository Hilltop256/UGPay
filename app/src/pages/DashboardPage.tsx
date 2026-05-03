import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, CreditCard, FileText, ArrowUpRight } from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 4500000, target: 5000000 },
  { month: "Feb", revenue: 3800000, target: 5000000 },
  { month: "Mar", revenue: 5200000, target: 5500000 },
  { month: "Apr", revenue: 4900000, target: 5500000 },
  { month: "May", revenue: 6100000, target: 6000000 },
  { month: "Jun", revenue: 5800000, target: 6000000 },
  { month: "Jul", revenue: 7200000, target: 6500000 },
]

const taxTypeData = [
  { name: "Property Tax", amount: 2450000 },
  { name: "Trading License", amount: 1800000 },
  { name: "Service Fee", amount: 980000 },
  { name: "Vehicle License", amount: 720000 },
  { name: "Other", amount: 450000 },
]

const recentTransactions = [
  { id: "TXN-001", taxpayer: "John Mukasa", type: "Property Tax", amount: "UGX 350,000", status: "completed", date: "2024-02-25" },
  { id: "TXN-002", taxpayer: "Sarah Nalubega", type: "Trading License", amount: "UGX 150,000", status: "pending", date: "2024-02-25" },
  { id: "TXN-003", taxpayer: "David Okello", type: "Service Fee", amount: "UGX 75,000", status: "completed", date: "2024-02-24" },
  { id: "TXN-004", taxpayer: "Grace Achieng", type: "Vehicle License", amount: "UGX 120,000", status: "failed", date: "2024-02-24" },
  { id: "TXN-005", taxpayer: "Peter Ssemakula", type: "Property Tax", amount: "UGX 420,000", status: "completed", date: "2024-02-23" },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1, 220 70% 50%))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-2, 160 60% 45%))",
  },
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back. Here's your agency overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 2.45M</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" />+12.5%
              </span>{" "}
              from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxpayers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" />+8
              </span>{" "}
              new this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground mt-1">
              UGX 845,000 awaiting confirmation
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue vs target (UGX)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(220 70% 50%)"
                    fill="hsl(220 70% 50% / 0.1)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="target"
                    stroke="hsl(160 60% 45%)"
                    fill="hsl(160 60% 45% / 0.1)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Revenue by Tax Type</CardTitle>
            <CardDescription>Breakdown by obligation type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taxTypeData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" horizontal={false} />
                  <XAxis type="number" className="text-muted-foreground" tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                  <YAxis dataKey="name" type="category" className="text-muted-foreground" width={100} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="hsl(220 70% 50%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest payment activity across all taxpayers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Taxpayer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                  <TableCell>{txn.taxpayer}</TableCell>
                  <TableCell>{txn.type}</TableCell>
                  <TableCell className="font-medium">{txn.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        txn.status === "completed"
                          ? "default"
                          : txn.status === "pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {txn.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{txn.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
