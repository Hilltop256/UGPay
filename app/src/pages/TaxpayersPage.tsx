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
import { Search, Plus, Users, Filter } from "lucide-react"

const taxpayers = [
  { id: "TP-001", nin: "CM81023456GH78", name: "John Mukasa", phone: "+256 772 123 456", type: "Individual", status: "active", obligations: 3, lastPayment: "2024-02-25" },
  { id: "TP-002", nin: "CM90045678GH12", name: "Sarah Nalubega", phone: "+256 704 234 567", type: "Business", status: "active", obligations: 5, lastPayment: "2024-02-24" },
  { id: "TP-003", nin: "CM85067890GH34", name: "David Okello", phone: "+256 782 345 678", type: "Individual", status: "inactive", obligations: 1, lastPayment: "2024-01-15" },
  { id: "TP-004", nin: "CM92089012GH56", name: "Grace Achieng", phone: "+256 754 456 789", type: "Business", status: "active", obligations: 4, lastPayment: "2024-02-20" },
  { id: "TP-005", nin: "CM87001234GH78", name: "Peter Ssemakula", phone: "+256 776 567 890", type: "Individual", status: "active", obligations: 2, lastPayment: "2024-02-23" },
  { id: "TP-006", nin: "CM93023456GH90", name: "Faith Namugga", phone: "+256 706 678 901", type: "Business", status: "pending", obligations: 0, lastPayment: "—" },
  { id: "TP-007", nin: "CM84045678GH12", name: "Robert Kibuuka", phone: "+256 788 789 012", type: "Individual", status: "active", obligations: 3, lastPayment: "2024-02-22" },
  { id: "TP-008", nin: "CM91067890GH34", name: "Christine Atim", phone: "+256 758 890 123", type: "Business", status: "active", obligations: 6, lastPayment: "2024-02-25" },
]

export default function TaxpayersPage() {
  const [search, setSearch] = useState("")

  const filtered = taxpayers.filter(
    (tp) =>
      tp.name.toLowerCase().includes(search.toLowerCase()) ||
      tp.nin.toLowerCase().includes(search.toLowerCase()) ||
      tp.phone.includes(search)
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Taxpayers</h1>
          <p className="text-muted-foreground mt-1">Manage registered taxpayers and create obligations</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Taxpayer
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Taxpayers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxpayers.length}</div>
            <p className="text-xs text-muted-foreground">Registered in system</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <Badge variant="default">Online</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxpayers.filter((t) => t.status === "active").length}</div>
            <p className="text-xs text-muted-foreground">Active taxpayers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
            <Badge variant="secondary">Pending</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxpayers.filter((t) => t.status === "pending").length}</div>
            <p className="text-xs text-muted-foreground">Awaiting NIRA verification</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Taxpayers</CardTitle>
          <CardDescription>Search and manage all registered taxpayers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, NIN, or phone..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>NIN</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Obligations</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((tp) => (
                <TableRow key={tp.id}>
                  <TableCell className="font-mono text-sm">{tp.id}</TableCell>
                  <TableCell className="font-mono text-xs">{tp.nin}</TableCell>
                  <TableCell className="font-medium">{tp.name}</TableCell>
                  <TableCell>{tp.phone}</TableCell>
                  <TableCell>{tp.type}</TableCell>
                  <TableCell>{tp.obligations}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tp.status === "active"
                          ? "default"
                          : tp.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {tp.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{tp.lastPayment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No taxpayers found</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
