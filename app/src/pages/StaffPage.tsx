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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Search, Plus, Users, UserPlus } from "lucide-react"

const staff = [
  { id: "ST-001", name: "Dr. Namugwanya Robert", email: "r.namugwanya@kcca.go.ug", role: "Admin", agency: "KCCA", lastActive: "2024-06-15 14:30", status: "active" },
  { id: "ST-002", name: "Nakato Sarah", email: "s.nakato@kcca.go.ug", role: "Revenue Officer", agency: "KCCA", lastActive: "2024-06-15 13:45", status: "active" },
  { id: "ST-003", name: "Opio James", email: "j.opio@kcca.go.ug", role: "Cashier", agency: "KCCA", lastActive: "2024-06-15 12:20", status: "active" },
  { id: "ST-004", name: "Tumwine Patricia", email: "p.tumwine@kcca.go.ug", role: "Auditor", agency: "KCCA", lastActive: "2024-06-14 16:00", status: "active" },
  { id: "ST-005", name: "Ssempijja Daniel", email: "d.ssempijja@kcca.go.ug", role: "Revenue Officer", agency: "KCCA", lastActive: "2024-06-15 10:15", status: "active" },
  { id: "ST-006", name: "Apolot Rebecca", email: "r.apolot@kcca.go.ug", role: "Viewer", agency: "KCCA", lastActive: "2024-06-10 09:00", status: "inactive" },
  { id: "ST-007", name: "Mugisha Emmanuel", email: "e.mugisha@kcca.go.ug", role: "Cashier", agency: "KCCA", lastActive: "2024-06-15 11:30", status: "active" },
  { id: "ST-008", name: "Nalwanga Christine", email: "c.nalwanga@kcca.go.ug", role: "Revenue Officer", agency: "KCCA", lastActive: "2024-06-13 15:45", status: "active" },
]

export default function StaffPage() {
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const filtered = staff.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
    const matchRole = roleFilter === "all" || s.role === roleFilter
    return matchSearch && matchRole
  })

  const totalCount = staff.length
  const activeCount = staff.filter((s) => s.status === "active").length
  const adminCount = staff.filter((s) => s.role === "Admin").length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Staff Management</h1>
          <p className="text-muted-foreground mt-1">Manage team members and their access roles</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Staff
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Staff Member</DialogTitle>
              <DialogDescription>Invite a new team member to the agency portal</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g. Namugwanya Robert" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="e.g. r.namugwanya@kcca.go.ug" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="revenue-officer">Revenue Officer</SelectItem>
                    <SelectItem value="cashier">Cashier</SelectItem>
                    <SelectItem value="auditor">Auditor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Send Invitation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
            <p className="text-xs text-muted-foreground">All team members</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <Badge variant="default">Online</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCount}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminCount}</div>
            <p className="text-xs text-muted-foreground">Full access</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roles</CardTitle>
            <Badge variant="secondary">5</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Configured roles</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage staff access and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[170px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Revenue Officer">Revenue Officer</SelectItem>
                <SelectItem value="Cashier">Cashier</SelectItem>
                <SelectItem value="Auditor">Auditor</SelectItem>
                <SelectItem value="Viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Agency</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      {s.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{s.email}</TableCell>
                  <TableCell>
                    <Badge variant={s.role === "Admin" ? "destructive" : s.role === "Auditor" ? "secondary" : "outline"}>
                      {s.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{s.agency}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{s.lastActive}</TableCell>
                  <TableCell>
                    <Badge variant={s.status === "active" ? "default" : "secondary"}>
                      {s.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No staff members found</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
