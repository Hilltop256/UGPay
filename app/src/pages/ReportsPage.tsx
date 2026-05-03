import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Download, BarChart3, FileText, TrendingUp, DollarSign } from "lucide-react"
import { format } from "date-fns"

const revenueTrendData = [
  { month: "Jul", revenue: 320000000, target: 350000000 },
  { month: "Aug", revenue: 290000000, target: 350000000 },
  { month: "Sep", revenue: 380000000, target: 400000000 },
  { month: "Oct", revenue: 410000000, target: 400000000 },
  { month: "Nov", revenue: 450000000, target: 450000000 },
  { month: "Dec", revenue: 520000000, target: 450000000 },
  { month: "Jan", revenue: 390000000, target: 400000000 },
  { month: "Feb", revenue: 440000000, target: 400000000 },
]

const collectionByType = [
  { name: "Property Tax", amount: 2450000000 },
  { name: "Trading License", amount: 1800000000 },
  { name: "Service Levy", amount: 980000000 },
  { name: "Vehicle License", amount: 720000000 },
  { name: "Market Dues", amount: 450000000 },
]

const reportTypes = [
  { id: "revenue-summary", name: "Revenue Summary", icon: DollarSign },
  { id: "collection-by-type", name: "Tax Collection by Type", icon: BarChart3 },
  { id: "compliance", name: "Taxpayer Compliance", icon: TrendingUp },
  { id: "arrears", name: "Outstanding Arrears", icon: FileText },
  { id: "reconciliation", name: "Reconciliation Report", icon: FileText },
  { id: "daily-collections", name: "Daily Collections", icon: DollarSign },
]

function formatUGX(amount: number): string {
  return new Intl.NumberFormat("en-UG").format(amount)
}

export default function ReportsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [reportType, setReportType] = useState("revenue-summary")
  const [downloadFormat, setDownloadFormat] = useState("pdf")

  const selectedReport = reportTypes.find((r) => r.id === reportType)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground mt-1">Generate and download revenue reports</p>
        </div>
        <div className="flex gap-2">
          <Select value={downloadFormat} onValueChange={setDownloadFormat}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Parameters</CardTitle>
          <CardDescription>Configure your report filters and date range</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label>Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((r) => (
                    <SelectItem key={r.id} value={r.id}>{r.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Selected Report</Label>
              <div className="flex items-center gap-2 h-10 px-3 border rounded-md bg-muted/50">
                {selectedReport && <selectedReport.icon className="h-4 w-4 text-muted-foreground" />}
                <span className="text-sm font-medium">{selectedReport?.name}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 3.21B</div>
            <p className="text-xs text-muted-foreground">Selected period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Monthly</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 401M</div>
            <p className="text-xs text-muted-foreground">Per month average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Achievement</CardTitle>
            <Badge variant="default">89%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Of projected target</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,947</div>
            <p className="text-xs text-muted-foreground">All payments</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue vs target</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ revenue: { label: "Revenue", color: "hsl(220 70% 50%)" }, target: { label: "Target", color: "hsl(160 60% 45%)" } }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueTrendData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                  <ChartTooltip content={<ChartTooltipContent formatter={(v) => `UGX ${(Number(v) / 1000000).toFixed(0)}M`} />} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(220 70% 50%)" fill="hsl(220 70% 50% / 0.1)" strokeWidth={2} />
                  <Area type="monotone" dataKey="target" stroke="hsl(160 60% 45%)" fill="hsl(160 60% 45% / 0.1)" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Collection by Tax Type</CardTitle>
            <CardDescription>Revenue breakdown by obligation type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ amount: { label: "Amount", color: "hsl(220 70% 50%)" } }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={collectionByType}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-muted-foreground" tick={{ fontSize: 12 }} />
                  <YAxis className="text-muted-foreground" tickFormatter={(v) => `${(v / 1000000000).toFixed(1)}B`} />
                  <ChartTooltip content={<ChartTooltipContent formatter={(v) => `UGX ${(Number(v) / 1000000).toFixed(0)}M`} />} />
                  <Bar dataKey="amount" fill="hsl(220 70% 50%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Summary</CardTitle>
          <CardDescription>Generated report details</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Total Revenue Collected</TableCell>
                <TableCell>UGX {formatUGX(3210000000)}</TableCell>
                <TableCell><Badge variant="default" className="text-green-600">+12.4%</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Property Tax</TableCell>
                <TableCell>UGX {formatUGX(2450000000)}</TableCell>
                <TableCell><Badge variant="default" className="text-green-600">+8.2%</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Trading Licenses</TableCell>
                <TableCell>UGX {formatUGX(1800000000)}</TableCell>
                <TableCell><Badge variant="default" className="text-green-600">+15.1%</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Service Levy</TableCell>
                <TableCell>UGX {formatUGX(980000000)}</TableCell>
                <TableCell><Badge variant="destructive">-3.2%</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vehicle Licenses</TableCell>
                <TableCell>UGX {formatUGX(720000000)}</TableCell>
                <TableCell><Badge variant="default" className="text-green-600">+5.7%</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
