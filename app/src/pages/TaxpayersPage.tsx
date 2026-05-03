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
import { Search, Plus, Users, UserCheck, AlertCircle, Percent } from "lucide-react"

const taxpayers = [
  { id: "TP-001", nin: "CM810234567012", name: "John Mukasa", phone: "+256 772 123 456", type: "Individual", obligations: 3, balance: 0, compliance: 100, lastPayment: "2024-02-25", status: "Active" },
  { id: "TP-002", nin: "CM900456781234", name: "Sarah Nalubega", phone: "+256 704 234 567", type: "Business", obligations: 5, balance: 350000, compliance: 82, lastPayment: "2024-02-24", status: "Active" },
  { id: "TP-003", nin: "CM850678901256", name: "David Okello", phone: "+256 782 345 678", type: "Individual", obligations: 1, balance: 0, compliance: 100, lastPayment: "2024-01-15", status: "Inactive" },
  { id: "TP-004", nin: "CM920890121278", name: "Grace Achieng", phone: "+256 754 456 789", type: "Business", obligations: 4, balance: 1200000, compliance: 60, lastPayment: "2024-02-20", status: "Arrears" },
  { id: "TP-005", nin: "CM870012341290", name: "Peter Ssemakula", phone: "+256 776 567 890", type: "Individual", obligations: 2, balance: 0, compliance: 100, lastPayment: "2024-02-23", status: "Active" },
  { id: "TP-006", nin: "CM930234561212", name: "Faith Namugga", phone: "+256 706 678 901", type: "Business", obligations: 0, balance: 0, compliance: 0, lastPayment: "—", status: "New" },
  { id: "TP-007", nin: "CM840456781234", name: "Robert Kibuuka", phone: "+256 788 789 012", type: "Individual", obligations: 3, balance: 180000, compliance: 90, lastPayment: "2024-02-22", status: "Active" },
  { id: "TP-008", nin: "CM910678901256", name: "Christine Atim", phone: "+256 758 890 123", type: "Business", obligations: 6, balance: 0, compliance: 100, lastPayment: "2024-02-25", status: "Active" },
  { id: "TP-009", nin: "CM880123451278", name: "Ivan Sserwanga", phone: "+256 772 901 234", type: "Property", obligations: 2, balance: 1200000, compliance: 45, lastPayment: "2024-01-10", status: "Arrears" },
  { id: "TP-010", nin: "CM960567891290", name: "Nancy Akello", phone: "+256 704 012 345", type: "Business", obligations: 4, balance: 350000, compliance: 72, lastPayment: "2024-02-15", status: "Arrears" },
  { id: "TP-011", nin: "CM820345671212", name: "Samuel Tumwesigye", phone: "+256 782 123 456", type: "Vehicle", obligations: 1, balance: 180000, compliance: 85, lastPayment: "2024-02-18", status: "Active" },
  { id: "TP-012", nin: "CM940789011234", name: "Betty Nabwire", phone: "+256 754 234 567", type: "Business", obligations: 3, balance: 95000, compliance: 78, lastPayment: "2024-02-21", status: "Active" },
]

export default function TaxpayersPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filtered = taxpayers.filter((tp) => {
    const matchSearch =
      tp.name.toLowerCase().includes(search.toLowerCase()) ||
      tp.nin.toLowerCase().includes(search.toLowerCase()) ||
      tp.phone.includes(search)
    const matchStatus = statusFilter === "all" || tp.status === statusFilter
    const matchType = typeFilter === "all" || tp.type === typeFilter
    return matchSearch && matchStatus && matchType
  })

  const totalArrears = taxpayers.reduce((sum, t) => sum + t.balance, 0)
  const avgCompliance = Math.round(taxpayers.filter(t => t.status !== "New").reduce((sum, t) => sum + t.compliance, 0) / taxpayers.filter(t => t.status !== "New").length)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Taxpayers</h1>
          <p className="text-muted-foreground mt-1">Manage registered taxpayers and obligations</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Taxpayer
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registered</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxpayers.length}</div>
            <p className="text-xs text-muted-foreground">All registered taxpayers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{taxpayers.filter((t) => t.status === "Active").length}</div>
            <p className="text-xs text-muted-foreground">Compliant taxpayers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">With Arrears</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{taxpayers.filter((t) => t.status === "Arrears").length}</div>
            <p className="text-xs text-muted-foreground">UGX {(totalArrears / 1000000).toFixed(2)}M outstanding</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgCompliance}%</div>
            <p className="text-xs text-muted-foreground">Average compliance</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Taxpayers</CardTitle>
          <CardDescription>Search and manage all registered taxpayers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by NIN, name, or phone..."
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
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Arrears">Arrears</SelectItem>
                <SelectItem value="New">New</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Individual">Individual</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Property">Property</SelectItem>
                <SelectItem value="Vehicle">Vehicle</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NIN</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Obligations</TableHead>
                <TableHead>Outstanding Balance</TableHead>
                <TableHead>Compliance</TableHead>
                <TableHead>Last Payment</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((tp) => (
                <TableRow key={tp.id}>
                  <TableCell className="font-mono text-xs">{tp.nin}</TableCell>
                  <TableCell className="font-medium">{tp.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{tp.type}</Badge>
                  </TableCell>
                  <TableCell>{tp.obligations}</TableCell>
                  <TableCell className={tp.balance > 0 ? "text-red-600 font-medium" : "text-muted-foreground"}>
                    {tp.balance > 0 ? `UGX ${(tp.balance / 1000).toFixed(0)}K` : "—"}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${tp.compliance >= 80 ? "bg-green-600" : tp.compliance >= 60 ? "bg-amber-500" : "bg-red-600"}`}
                          style={{ width: `${tp.compliance}%` }}
                        />
                      </div>
                      <span className="text-xs">{tp.compliance}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{tp.lastPayment}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tp.status === "Active"
                          ? "default"
                          : tp.status === "Arrears"
                            ? "destructive"
                            : tp.status === "New"
                              ? "secondary"
                              : "outline"
                      }
                    >
                      {tp.status}
                    </Badge>
                  </TableCell>
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
