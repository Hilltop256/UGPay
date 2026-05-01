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

const taxpayers = [
  { id: "TX-001", name: "John Smith", tin: "123-45-6789", status: "Active", balance: "$2,450.00" },
  { id: "TX-002", name: "Jane Doe", tin: "987-65-4321", status: "Active", balance: "$0.00" },
  { id: "TX-003", name: "ABC Corp", tin: "11-222-3333", status: "Under Review", balance: "$15,200.00" },
  { id: "TX-004", name: "Bob Wilson", tin: "444-55-6666", status: "Active", balance: "$890.00" },
  { id: "TX-005", name: "XYZ LLC", tin: "77-888-9999", status: "Inactive", balance: "$0.00" },
  { id: "TX-006", name: "Sarah Johnson", tin: "222-33-4444", status: "Active", balance: "$3,100.00" },
  { id: "TX-007", name: "Tech Solutions Inc", tin: "55-666-7777", status: "Under Review", balance: "$8,750.00" },
  { id: "TX-008", name: "Mike Davis", tin: "888-99-0000", status: "Active", balance: "$125.00" },
]

export default function TaxpayersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Taxpayers</h1>
          <p className="text-muted-foreground mt-1">
            Manage taxpayer records and account information.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Taxpayers</CardTitle>
          <CardDescription>
            A total of {taxpayers.length} registered taxpayers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input placeholder="Search taxpayers..." className="pl-8" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>TIN</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taxpayers.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.id}</TableCell>
                  <TableCell>{t.name}</TableCell>
                  <TableCell className="font-mono text-sm">{t.tin}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        t.status === "Active"
                          ? "default"
                          : t.status === "Under Review"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {t.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {t.balance}
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
