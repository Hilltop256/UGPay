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
import { Search, Filter, Download, Receipt } from "lucide-react"

const transactions = [
  { id: "TXN-001", taxpayer: "John Mukasa", nin: "CM81023456GH78", type: "Property Tax", amount: "UGX 350,000", method: "MTN MoMo", status: "completed", date: "2024-02-25", receipt: "RCP-2024-001" },
  { id: "TXN-002", taxpayer: "Sarah Nalubega", nin: "CM90045678GH12", type: "Trading License", amount: "UGX 150,000", method: "Airtel Money", status: "pending", date: "2024-02-25", receipt: "—" },
  { id: "TXN-003", taxpayer: "David Okello", nin: "CM85067890GH34", type: "Service Fee", amount: "UGX 75,000", method: "MTN MoMo", status: "completed", date: "2024-02-24", receipt: "RCP-2024-003" },
  { id: "TXN-004", taxpayer: "Grace Achieng", nin: "CM92089012GH56", type: "Vehicle License", amount: "UGX 120,000", method: "Bank Transfer", status: "failed", date: "2024-02-24", receipt: "—" },
  { id: "TXN-005", taxpayer: "Peter Ssemakula", nin: "CM87001234GH78", type: "Property Tax", amount: "UGX 420,000", method: "MTN MoMo", status: "completed", date: "2024-02-23", receipt: "RCP-2024-005" },
  { id: "TXN-006", taxpayer: "Faith Namugga", nin: "CM93023456GH90", type: "Trading License", amount: "UGX 200,000", method: "Airtel Money", status: "completed", date: "2024-02-22", receipt: "RCP-2024-006" },
  { id: "TXN-007", taxpayer: "Robert Kibuuka", nin: "CM84045678GH12", type: "Service Fee", amount: "UGX 95,000", method: "MTN MoMo", status: "pending", date: "2024-02-22", receipt: "—" },
  { id: "TXN-008", taxpayer: "Christine Atim", nin: "CM91067890GH34", type: "Property Tax", amount: "UGX 580,000", method: "Bank Transfer", status: "completed", date: "2024-02-21", receipt: "RCP-2024-008" },
  { id: "TXN-009", taxpayer: "John Mukasa", nin: "CM81023456GH78", type: "Vehicle License", amount: "UGX 180,000", method: "Airtel Money", status: "completed", date: "2024-02-20", receipt: "RCP-2024-009" },
  { id: "TXN-010", taxpayer: "Sarah Nalubega", nin: "CM90045678GH12", type: "Trading License", amount: "UGX 150,000", method: "MTN MoMo", status: "failed", date: "2024-02-19", receipt: "—" },
]

export default function TransactionsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = transactions.filter((txn) => {
    const matchSearch =
      txn.taxpayer.toLowerCase().includes(search.toLowerCase()) ||
      txn.id.toLowerCase().includes(search.toLowerCase()) ||
      txn.receipt.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === "all" || txn.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalAmount = filtered.reduce((sum, t) => {
    const num = parseInt(t.amount.replace(/[^0-9]/g, ""))
    return t.status === "completed" ? sum + num : sum
  }, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground mt-1">View, filter, and export all payment records</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transactions.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Badge variant="default">{transactions.filter((t) => t.status === "completed").length}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX {(totalAmount / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-muted-foreground">Revenue collected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending / Failed</CardTitle>
            <Badge variant="secondary">{transactions.filter((t) => t.status !== "completed").length}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {transactions.filter((t) => t.status === "pending").length} pending,{" "}
              {transactions.filter((t) => t.status === "failed").length} failed
            </div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Search and filter payment history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, ID, or receipt..."
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
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Taxpayer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Receipt</TableHead>
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
                  <TableCell>{txn.method}</TableCell>
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
                  <TableCell className="font-mono text-sm">{txn.receipt}</TableCell>
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
