import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const transactions = [
  { id: "TRX-001", taxpayer: "John Smith", amount: "$1,250.00", type: "Income Tax", status: "Completed", date: "2025-04-28" },
  { id: "TRX-002", taxpayer: "Jane Doe", amount: "$3,400.00", type: "VAT", status: "Completed", date: "2025-04-27" },
  { id: "TRX-003", taxpayer: "ABC Corp", amount: "$15,200.00", type: "Corporate Tax", status: "Pending", date: "2025-04-26" },
  { id: "TRX-004", taxpayer: "Bob Wilson", amount: "$890.00", type: "Income Tax", status: "Completed", date: "2025-04-25" },
  { id: "TRX-005", taxpayer: "Sarah Johnson", amount: "$2,100.00", type: "Property Tax", status: "Failed", date: "2025-04-24" },
  { id: "TRX-006", taxpayer: "Tech Solutions Inc", amount: "$8,750.00", type: "Corporate Tax", status: "Pending", date: "2025-04-23" },
]

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground mt-1">
            View and manage all payment transactions.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            Recent payment transactions across all taxpayers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-8" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Taxpayer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.id}</TableCell>
                  <TableCell>{t.taxpayer}</TableCell>
                  <TableCell>{t.type}</TableCell>
                  <TableCell className="font-medium">{t.amount}</TableCell>
                  <TableCell>{t.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        t.status === "Completed"
                          ? "default"
                          : t.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {t.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
