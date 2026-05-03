import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Building2, Bell, Key, Palette, ReceiptText, DollarSign, MessageSquare } from "lucide-react"
import { useAgency } from "@/store/agency-context"

const taxTypes = [
  { name: "Property Tax", rate: "0.5%", description: "Annual tax on property ownership based on assessed value", enabled: true },
  { name: "Trading License", rate: "UGX 100K - 500K", description: "Annual license for business operations within municipality", enabled: true },
  { name: "Service Levy", rate: "10%", description: "Levy on gross turnover for service-based businesses", enabled: true },
  { name: "Vehicle License", rate: "UGX 50K - 300K", description: "Annual license fee based on vehicle type and capacity", enabled: true },
  { name: "Market Dues", rate: "UGX 2K - 10K/day", description: "Daily market stall fees for vendors in municipal markets", enabled: true },
  { name: "Hotel Levy", rate: "5%", description: "Levy on accommodation revenue for hotels and lodges", enabled: false },
]

const paymentChannels = [
  { name: "MTN MoMo", type: "Mobile Money", fee: "1.5%", enabled: true, provider: "MTN Uganda" },
  { name: "Airtel Money", type: "Mobile Money", fee: "1.5%", enabled: true, provider: "Airtel Uganda" },
  { name: "Bank", type: "Bank Transfer", fee: "0%", enabled: true, provider: "Stanbic, Centenary, etc." },
  { name: "Cash", type: "Cash Payment", fee: "0%", enabled: true, provider: "Agency offices" },
]

export default function ConfigurationPage() {
  const { currentAgency } = useAgency()
  const [notifications, setNotifications] = useState({
    sms: true,
    email: true,
    whatsapp: true,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
        <p className="text-muted-foreground mt-1">Manage your agency settings, tax types, and integrations</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="general">
            <Building2 className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="tax-types">
            <ReceiptText className="mr-2 h-4 w-4" />
            Tax Types
          </TabsTrigger>
          <TabsTrigger value="payment-channels">
            <DollarSign className="mr-2 h-4 w-4" />
            Payment Channels
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="api">
            <Key className="mr-2 h-4 w-4" />
            API Keys
          </TabsTrigger>
          <TabsTrigger value="branding">
            <Palette className="mr-2 h-4 w-4" />
            Branding
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agency Information</CardTitle>
              <CardDescription>Update your agency details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="agency-name">Agency Name</Label>
                <Input id="agency-name" defaultValue={currentAgency?.name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="agency-code">Agency Code</Label>
                <Input id="agency-code" defaultValue={currentAgency?.code} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="admin@kcca.go.ug" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input id="contact-phone" defaultValue="+256 414 254 001" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Physical Address</Label>
                <Input id="address" defaultValue="Plot 1-3, Apollo Kaggwa Road, Kampala" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax-types" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Types & Rates</CardTitle>
              <CardDescription>Configure available tax types and their rates</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tax Type</TableHead>
                    <TableHead>Rate / Fee</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {taxTypes.map((tax) => (
                    <TableRow key={tax.name}>
                      <TableCell className="font-medium">{tax.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{tax.rate}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground max-w-[300px] truncate">
                        {tax.description}
                      </TableCell>
                      <TableCell>
                        <Switch defaultChecked={tax.enabled} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4">Add Tax Type</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment-channels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Channels</CardTitle>
              <CardDescription>Configure payment collection methods and fees</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Channel</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Transaction Fee</TableHead>
                    <TableHead>Enabled</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentChannels.map((ch) => (
                    <TableRow key={ch.name}>
                      <TableCell className="font-medium">{ch.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{ch.type}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{ch.provider}</TableCell>
                      <TableCell>{ch.fee}</TableCell>
                      <TableCell>
                        <Switch defaultChecked={ch.enabled} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4">Add Payment Channel</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent to taxpayers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send SMS alerts for payment confirmations and reminders</p>
                  </div>
                  <Switch
                    id="sms"
                    checked={notifications.sms}
                    onCheckedChange={(v) => setNotifications((p) => ({ ...p, sms: v }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send email receipts and monthly statements</p>
                  </div>
                  <Switch
                    id="email"
                    checked={notifications.email}
                    onCheckedChange={(v) => setNotifications((p) => ({ ...p, email: v }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send payment receipts via WhatsApp Business API</p>
                  </div>
                  <Switch
                    id="whatsapp"
                    checked={notifications.whatsapp}
                    onCheckedChange={(v) => setNotifications((p) => ({ ...p, whatsapp: v }))}
                  />
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Notification Templates</Label>
                <div className="grid gap-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Payment Confirmation SMS</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">Dear &#123;name&#125;, your &#123;taxType&#125; payment of UGX &#123;amount&#125; has been received. Ref: &#123;receiptNo&#125;</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Payment Reminder SMS</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">Reminder: Your &#123;taxType&#125; of UGX &#123;amount&#125; is due on &#123;dueDate&#125;. Pay via UGPAY to avoid penalties.</p>
                  </div>
                </div>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integrations</CardTitle>
              <CardDescription>Manage API keys for Mobile Money, NIRA, and SMS gateway</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Mobile Money APIs</h3>
                <div className="grid gap-2">
                  <Label htmlFor="mtn-key">MTN Mobile Money API Key</Label>
                  <Input id="mtn-key" type="password" defaultValue="mtn_sk_live_xxxxxxxxxxxx" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="airtel-key">Airtel Money API Key</Label>
                  <Input id="airtel-key" type="password" defaultValue="airtel_sk_live_xxxxxxxxxxxx" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Government Services</h3>
                <div className="grid gap-2">
                  <Label htmlFor="nira-key">NIRA Verification API Key</Label>
                  <Input id="nira-key" type="password" defaultValue="nira_api_xxxxxxxxxxxx" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Communication APIs</h3>
                <div className="grid gap-2">
                  <Label htmlFor="sms-key">Africa's Talking API Key (SMS)</Label>
                  <Input id="sms-key" type="password" defaultValue="at_api_xxxxxxxxxxxx" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="whatsapp-key">WhatsApp Business API Key</Label>
                  <Input id="whatsapp-key" type="password" defaultValue="wa_api_xxxxxxxxxxxx" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button>Save API Keys</Button>
                <Button variant="outline">Test Connection</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Branding Settings</CardTitle>
              <CardDescription>Customize the appearance of your agency portal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="agency-logo">Agency Logo URL</Label>
                <Input id="agency-logo" placeholder="https://example.com/logo.png" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex gap-2">
                  <Input id="primary-color" defaultValue={currentAgency?.primaryColor || "#2563EB"} className="w-32" />
                  <div
                    className="h-9 w-32 rounded-md border"
                    style={{ backgroundColor: currentAgency?.primaryColor || "#2563EB" }}
                  />
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Display Options</Label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-logo">Show agency logo</Label>
                      <p className="text-sm text-muted-foreground">Display logo in portal header</p>
                    </div>
                    <Switch id="show-logo" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-branding">Show government branding</Label>
                      <p className="text-sm text-muted-foreground">Display Republic of Uganda footer</p>
                    </div>
                    <Switch id="show-branding" defaultChecked />
                  </div>
                </div>
              </div>
              <Button>Save Branding</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
