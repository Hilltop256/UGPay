import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
import { Search, Filter, Download, ArrowUpRight, AlertCircle, CheckCircle, XCircle } from "lucide-react"

const transactions = [
  { id: "TXN-0412", taxpayer: "John Mukasa", nin: "CM810234567012", type: "Property Tax", amount: "UGX 350,000", method: "MTN MoMo", status: "completed", reconciliation: "Reconciled", date: "2024-02-25", receipt: "RCP-2024-412" },
  { id: "TXN-0411", taxpayer: "Sarah Nalubega", nin: "CM900456781234", type: "Trading License", amount: "UGX 150,000", method: "Airtel Money", status: "completed", reconciliation: "Reconciled", date: "2024-02-25", receipt: "RCP-2024-411" },
  { id: "TXN-0410", taxpayer: "David Okello", nin: "CM850678901256", type: "Service Levy", amount: "UGX 75,000", method: "MTN MoMo", status: "completed", reconciliation: "Pending", date: "2024-02-25", receipt: "RCP-2024-410" },
  { id: "TXN-0409", taxpayer: "Grace Achieng", nin: "CM920890121278", type: "Vehicle License", amount: "UGX 120,000", method: "Bank", status: "completed", reconciliation: "Reconciled", date: "2024-02-24", receipt: "RCP-2024-409" },
  { id: "TXN-0408", taxpayer: "Peter Ssemakula", nin: "CM870012341290", type: "Property Tax", amount: "UGX 420,000", method: "MTN MoMo", status: "failed", reconciliation: "Unmatched", date: "2024-02-24", receipt: "—" },
  { id: "TXN-0407", taxpayer: "Faith Namugga", nin: "CM930234561212", type: "Market Dues", amount: "UGX 50,000", method: "Cash", status: "completed", reconciliation: "Reconciled", date: "2024-02-24", receipt: "RCP-2024-407" },
  { id: "TXN-0406", taxpayer: "Robert Kibuuka", nin: "CM840456781234", type: "Trading License", amount: "UGX 200,000", method: "Airtel Money", status: "completed", reconciliation: "Reconciled", date: "2024-02-24", receipt: "RCP-2024-406" },
  { id: "TXN-0405", taxpayer: "Christine Atim", nin: "CM910678901256", type: "Property Tax", amount: "UGX 580,000", method: "Bank", status: "completed", reconciliation: "Reconciled", date: "2024-02-23", receipt: "RCP-2024-405" },
  { id: "TXN-0404", taxpayer: "John Mukasa", nin: "CM810234567012", type: "Vehicle License", amount: "UGX 180,000", method: "Airtel Money", status: "completed", reconciliation: "Reconciled", date: "2024-02-23", receipt: "RCP-2024-404" },
  { id: "TXN-0403", taxpayer: "Sarah Nalubega", nin: "CM900456781234", type: "Service Levy", amount: "UGX 95,000", method: "MTN MoMo", status: "completed", reconciliation: "Pending", date: "2024-02-23", receipt: "RCP-2024-403" },
  { id: "TXN-0402", taxpayer: "Ivan Sserwanga", nin: "CM880123451278", type: "Trading License", amount: "UGX 250,000", method: "Agent", status: "completed", reconciliation: "Reconciled", date: "2024-02-22", receipt: "RCP-2024-402" },
  { id: "TXN-0401", taxpayer: "Nancy Akello", nin: "CM960567891290", type: "Property Tax", amount: "UGX 620,000", method: "MTN MoMo", status: "failed", reconciliation: "Unmatched", date: "2024-02-22", receipt: "—" },
]

export default function TransactionsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [reconFilter, setReconFilter] = useState("all")

  const filtered = transactions.filter((txn) => {
    const matchSearch =
      txn.taxpayer.toLowerCase().includes(search.toLowerCase()) ||
      txn.id.toLowerCase().includes(search.toLowerCase()) ||
      txn.receipt.toLowerCase().includes(search.toLowerCase()) ||
      txn.nin.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === "all" || txn.status === statusFilter
    const matchRecon = reconFilter === "all" || txn.reconciliation === reconFilter
    return matchSearch && matchStatus && matchRecon
  })

  const totalCollected = transactions.filter(t => t.status === "completed").length
  const pendingRecon = transactions.filter(t => t.reconciliation === "Pending").length
  const failedReversed = transactions.filter(t => t.status === "failed").length
  const reconciledCount = transactions.filter(t => t.reconciliation === "Reconciled").length
  const reconRate = Math.round((reconciledCount / transactions.length) * 100)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground mt-1">View, filter, and export all payment records</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{totalCollected}</div>
            <p className="text-xs text-muted-foreground">Successful transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reconciliation</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{pendingRecon}</div>
            <p className="text-xs text-muted-foreground">Awaiting bank match</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed / Reversed</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{failedReversed}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reconciliation Rate</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reconRate}%</div>
            <p className="text-xs text-muted-foreground">{reconciledCount} of {transactions.length} matched</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Search and filter payment history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, ID, NIN, or receipt..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={reconFilter} onValueChange={setReconFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Reconciliation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Reconciled">Reconciled</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Unmatched">Unmatched</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Taxpayer</TableHead>
                <TableHead>Tax Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reconciliation</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{txn.taxpayer}</div>
                      <div className="text-xs text-muted-foreground font-mono">{txn.nin}</div>
                    </div>
                  </TableCell>
                  <TableCell>{txn.type}</TableCell>
                  <TableCell className="font-medium">{txn.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {txn.method}
                    </Badge>
                  </TableCell>
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
                  <TableCell>
                    <Badge
                      variant={
                        txn.reconciliation === "Reconciled"
                          ? "default"
                          : txn.reconciliation === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {txn.reconciliation}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{txn.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No transactions found</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
