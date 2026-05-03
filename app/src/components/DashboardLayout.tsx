import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  Receipt,
  CreditCard,
  BarChart3,
  UserCog,
  ScrollText,
  Settings,
  LogOut,
  Bell,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { agencies } from "@/store/agencies"

const collectionMenuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Taxpayers", icon: Users, path: "/taxpayers" },
  { title: "Transactions", icon: Receipt, path: "/transactions" },
  { title: "Payment Plans", icon: CreditCard, path: "/payment-plans" },
]

const managementMenuItems = [
  { title: "Reports", icon: BarChart3, path: "/reports" },
  { title: "Staff", icon: UserCog, path: "/staff" },
  { title: "Audit Log", icon: ScrollText, path: "/audit-log" },
]

const settingsMenuItems = [
  { title: "Configuration", icon: Settings, path: "/configuration" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedAgency, setSelectedAgency] = useState(agencies[0])

  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <NavLink to="/dashboard">
                  <div
                    className="flex aspect-square size-8 items-center justify-center rounded-lg text-primary-foreground"
                    style={{ backgroundColor: selectedAgency.primaryColor }}
                  >
                    <span className="text-lg font-bold">{selectedAgency.code.charAt(0)}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">UGPAY</span>
                    <span className="text-xs text-muted-foreground">
                      {selectedAgency.type === "capital" ? "Capital City" : selectedAgency.type === "municipal" ? "Municipal" : selectedAgency.type === "district" ? "District" : "Sub-county"}
                    </span>
                  </div>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="px-2 pt-2">
            <Select
              value={selectedAgency.id}
              onValueChange={(val) => {
                const agency = agencies.find((a) => a.id === val)
                if (agency) setSelectedAgency(agency)
              }}
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {agencies.map((agency) => (
                  <SelectItem key={agency.id} value={agency.id}>
                    <div className="flex items-center gap-2">
                      <div
                        className="size-2 rounded-full"
                        style={{ backgroundColor: agency.primaryColor }}
                      />
                      {agency.code} - {agency.name.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </SidebarHeader>
        <Separator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Collections</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {collectionMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.path}
                    >
                      <NavLink to={item.path}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {managementMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.path}
                    >
                      <NavLink to={item.path}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.path}
                    >
                      <NavLink to={item.path}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button onClick={() => navigate("/login")}>
                  <LogOut />
                  <span>Sign Out</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2 ml-2">
            <span className="font-semibold text-sm">{selectedAgency.name}</span>
            <Badge variant="outline" className="text-xs">
              {selectedAgency.type === "capital" ? "Capital" : selectedAgency.type === "municipal" ? "Municipal" : selectedAgency.type}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {selectedAgency.region} Region
            </span>
          </div>
          <div className="flex-1" />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-primary-foreground text-xs font-medium" style={{ backgroundColor: selectedAgency.primaryColor }}>
                    {selectedAgency.code.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>Admin User</span>
                  <span className="text-xs font-normal text-muted-foreground">{selectedAgency.name}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/configuration")}>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/login")}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
