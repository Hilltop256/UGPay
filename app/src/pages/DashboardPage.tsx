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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  TrendingUp,
  Users,
  FileText,
  ArrowUpRight,
  AlertTriangle,
  Target,
  ReceiptText,
  Percent,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useAgency } from "@/store/agency-context"

const revenueData = [
  { month: "Jan", revenue: 45000000, target: 50000000 },
  { month: "Feb", revenue: 38000000, target: 50000000 },
  { month: "Mar", revenue: 52000000, target: 55000000 },
  { month: "Apr", revenue: 49000000, target: 55000000 },
  { month: "May", revenue: 61000000, target: 60000000 },
  { month: "Jun", revenue: 58000000, target: 60000000 },
  { month: "Jul", revenue: 72000000, target: 65000000 },
  { month: "Aug", revenue: 68000000, target: 65000000 },
  { month: "Sep", revenue: 55000000, target: 60000000 },
  { month: "Oct", revenue: 63000000, target: 65000000 },
  { month: "Nov", revenue: 70000000, target: 70000000 },
  { month: "Dec", revenue: 78000000, target: 75000000 },
]

const taxTypeData = [
  { name: "Property Tax", amount: 145000000 },
  { name: "Trading License", amount: 98000000 },
  { name: "Service Levy", amount: 42000000 },
  { name: "Vehicle License", amount: 71000000 },
  { name: "Market Dues", amount: 58000000 },
  { name: "Hotel Levy", amount: 36000000 },
]

const channelData = [
  { name: "MTN MoMo", value: 42 },
  { name: "Airtel Money", value: 28 },
  { name: "Bank", value: 18 },
  { name: "Cash", value: 8 },
  { name: "Agent", value: 4 },
]

const CHANNEL_COLORS = ["#2563eb", "#059669", "#d97706", "#dc2626", "#7c3aed"]

const recentTransactions = [
  { id: "TXN-0412", taxpayer: "John Mukasa", type: "Property Tax", amount: "UGX 350,000", status: "completed", date: "2024-02-25", method: "MTN MoMo" },
  { id: "TXN-0411", taxpayer: "Sarah Nalubega", type: "Trading License", amount: "UGX 150,000", status: "completed", date: "2024-02-25", method: "Airtel Money" },
  { id: "TXN-0410", taxpayer: "David Okello", type: "Service Levy", amount: "UGX 75,000", status: "pending", date: "2024-02-25", method: "MTN MoMo" },
  { id: "TXN-0409", taxpayer: "Grace Achieng", type: "Vehicle License", amount: "UGX 120,000", status: "completed", date: "2024-02-24", method: "Bank" },
  { id: "TXN-0408", taxpayer: "Peter Ssemakula", type: "Property Tax", amount: "UGX 420,000", status: "failed", date: "2024-02-24", method: "MTN MoMo" },
  { id: "TXN-0407", taxpayer: "Faith Namugga", type: "Market Dues", amount: "UGX 50,000", status: "completed", date: "2024-02-24", method: "Cash" },
  { id: "TXN-0406", taxpayer: "Robert Kibuuka", type: "Trading License", amount: "UGX 200,000", status: "completed", date: "2024-02-23", method: "Airtel Money" },
]

const overdueObligations = [
  { taxpayer: "Ivan Sserwanga", type: "Property Tax", amount: "UGX 1,200,000", daysOverdue: 45 },
  { taxpayer: "Nancy Akello", type: "Trading License", amount: "UGX 350,000", daysOverdue: 30 },
  { taxpayer: "Samuel Tumwesigye", type: "Vehicle License", amount: "UGX 180,000", daysOverdue: 22 },
  { taxpayer: "Betty Nabwire", type: "Service Levy", amount: "UGX 95,000", daysOverdue: 15 },
]

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1, 220 70% 50%))" },
  target: { label: "Target", color: "hsl(var(--chart-2, 160 60% 45%))" },
}

export default function DashboardPage() {
  const { currentAgency } = useAgency()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{currentAgency?.name}</h1>
        <p className="text-muted-foreground mt-1">Revenue collection dashboard and analytics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Collection</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 2.45M</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium flex items-center gap-1 inline">
                <ArrowUpRight className="h-3 w-3" />+12.5%
              </span> from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 65.0M</div>
            <Progress value={78} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">UGX 50.7M collected (78%)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Taxpayers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,245</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium flex items-center gap-1 inline">
                <ArrowUpRight className="h-3 w-3" />+42
              </span> new this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Arrears</CardTitle>
            <ReceiptText className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 18.2M</div>
            <p className="text-xs text-muted-foreground mt-1">412 taxpayers with arrears</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.4%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium">+3.2%</span> vs last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reconciliation</CardTitle>
            <FileText className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground mt-1">UGX 1.8M awaiting match</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue vs target (UGX)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
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
                  <XAxis type="number" className="text-muted-foreground" tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                  <YAxis dataKey="name" type="category" className="text-muted-foreground" width={110} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="hsl(220 70% 50%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Payment Channel</CardTitle>
            <CardDescription>Collection method distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {channelData.map((_, i) => (
                    <Cell key={i} fill={CHANNEL_COLORS[i % CHANNEL_COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {channelData.map((ch, i) => (
                <div key={ch.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full" style={{ backgroundColor: CHANNEL_COLORS[i] }} />
                    <span>{ch.name}</span>
                  </div>
                  <span className="font-medium">{ch.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest payment activity across all taxpayers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Taxpayer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                    <TableCell className="font-medium">{txn.taxpayer}</TableCell>
                    <TableCell>{txn.type}</TableCell>
                    <TableCell className="font-medium">{txn.amount}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{txn.method}</TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-5 w-5" />
              Compliance Rate
            </CardTitle>
            <CardDescription>Taxpayer compliance overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Property Tax", rate: 82 },
              { label: "Trading License", rate: 76 },
              { label: "Service Levy", rate: 68 },
              { label: "Vehicle License", rate: 85 },
              { label: "Market Dues", rate: 61 },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="font-medium">{item.rate}%</span>
                </div>
                <Progress
                  value={item.rate}
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-red-200 dark:border-red-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              Overdue Obligations
            </CardTitle>
            <CardDescription>Taxpayers with overdue payments requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Taxpayer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Days</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {overdueObligations.map((obl, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{obl.taxpayer}</TableCell>
                    <TableCell>{obl.type}</TableCell>
                    <TableCell className="font-medium text-red-600">{obl.amount}</TableCell>
                    <TableCell>
                      <Badge variant={obl.daysOverdue > 30 ? "destructive" : "secondary"}>
                        {obl.daysOverdue}d
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
