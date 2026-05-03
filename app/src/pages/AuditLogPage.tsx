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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Search, Filter } from "lucide-react"
import { format } from "date-fns"

const auditLogs = [
  { id: 1, timestamp: "2024-06-15 14:32:10", user: "Dr. Namugwanya Robert", action: "Login", entity: "User Session", details: "Successful login from 197.164.1.45", ip: "197.164.1.45" },
  { id: 2, timestamp: "2024-06-15 14:15:22", user: "Nakato Sarah", action: "Payment Created", entity: "TXN-2024-1247", details: "Created Property Tax payment - UGX 850,000", ip: "197.164.12.33" },
  { id: 3, timestamp: "2024-06-15 13:48:05", user: "Opio James", action: "Taxpayer Updated", entity: "TP-002 Nalubega Sarah", details: "Updated phone number and business address", ip: "197.164.10.12" },
  { id: 4, timestamp: "2024-06-15 12:30:18", user: "Tumwine Patricia", action: "Report Generated", entity: "Monthly Revenue Report", details: "Generated May 2024 revenue summary PDF", ip: "197.164.1.45" },
  { id: 5, timestamp: "2024-06-15 11:20:44", user: "Ssempijja Daniel", action: "Settings Changed", entity: "Payment Channels", details: "Enabled Airtel Money payment channel", ip: "197.164.5.78" },
  { id: 6, timestamp: "2024-06-15 10:05:33", user: "Dr. Namugwanya Robert", action: "Payment Created", entity: "TXN-2024-1243", details: "Bank transfer payment - UGX 1,200,000", ip: "197.164.1.45" },
  { id: 7, timestamp: "2024-06-14 16:45:12", user: "Mugisha Emmanuel", action: "Login", entity: "User Session", details: "Successful login from 197.164.8.22", ip: "197.164.8.22" },
  { id: 8, timestamp: "2024-06-14 15:20:08", user: "Nalwanga Christine", action: "Taxpayer Updated", entity: "TP-008 Atim Christine", details: "Added new trading license obligation", ip: "197.164.3.91" },
  { id: 9, timestamp: "2024-06-14 14:10:55", user: "Dr. Namugwanya Robert", action: "Report Generated", entity: "Taxpayer Compliance Report", details: "Generated Q2 2024 compliance report", ip: "197.164.1.45" },
  { id: 10, timestamp: "2024-06-14 11:55:30", user: "Nakato Sarah", action: "Payment Created", entity: "TXN-2024-1238", details: "MTN MoMo payment - UGX 620,000", ip: "197.164.12.33" },
]

const actionTypes = ["Login", "Payment Created", "Taxpayer Updated", "Settings Changed", "Report Generated"]

export default function AuditLogPage() {
  const [search, setSearch] = useState("")
  const [actionFilter, setActionFilter] = useState("all")
  const [date, setDate] = useState<Date | undefined>(undefined)

  const filtered = auditLogs.filter((log) => {
    const matchSearch =
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.details.toLowerCase().includes(search.toLowerCase()) ||
      log.entity.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.includes(search)
    const matchAction = actionFilter === "all" || log.action === actionFilter
    return matchSearch && matchAction
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Audit Log</h1>
        <p className="text-muted-foreground mt-1">Track all system activity and user actions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Activity Log</CardTitle>
          <CardDescription>Searchable record of all actions performed in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by user, action, entity, or IP..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Action Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                {actionTypes.map((action) => (
                  <SelectItem key={action} value={action}>{action}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[160px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Filter date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-sm text-muted-foreground whitespace-nowrap">{log.timestamp}</TableCell>
                  <TableCell className="font-medium whitespace-nowrap">{log.user}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.action === "Login"
                          ? "default"
                          : log.action === "Payment Created"
                          ? "secondary"
                          : log.action === "Taxpayer Updated"
                          ? "outline"
                          : log.action === "Settings Changed"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {log.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{log.entity}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">{log.details}</TableCell>
                  <TableCell className="font-mono text-xs whitespace-nowrap">{log.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No audit logs found</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
