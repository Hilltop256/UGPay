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
import { Building2, Bell, Key, Palette } from "lucide-react"

export default function ConfigurationPage() {
  const [notifications, setNotifications] = useState({
    sms: true,
    email: true,
    push: false,
    whatsapp: true,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
        <p className="text-muted-foreground mt-1">Manage your agency settings, branding, and integrations</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">
            <Building2 className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="branding">
            <Palette className="mr-2 h-4 w-4" />
            Branding
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="api">
            <Key className="mr-2 h-4 w-4" />
            API Keys
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
                <Input id="agency-name" defaultValue="Uganda Revenue Authority" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="agency-code">Agency Code</Label>
                <Input id="agency-code" defaultValue="URA-001" disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="admin@ura.go.ug" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input id="contact-phone" defaultValue="+256 414 000 000" />
              </div>
              <Button>Save Changes</Button>
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
                  <Input id="primary-color" defaultValue="#2563EB" className="w-32" />
                  <div className="h-9 w-32 rounded-md border" style={{ backgroundColor: "#2563EB" }} />
                </div>
              </div>
              <div className="grid gap-2">
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
                      <p className="text-sm text-muted-foreground">Display "Republic of Uganda" footer</p>
                    </div>
                    <Switch id="show-branding" defaultChecked />
                  </div>
                </div>
              </div>
              <Button>Save Branding</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send SMS alerts for payment confirmations</p>
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
                    <p className="text-sm text-muted-foreground">Send email receipts and confirmations</p>
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
                    <Label htmlFor="push">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Browser push notifications for admins</p>
                  </div>
                  <Switch
                    id="push"
                    checked={notifications.push}
                    onCheckedChange={(v) => setNotifications((p) => ({ ...p, push: v }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send payment receipts via WhatsApp</p>
                  </div>
                  <Switch
                    id="whatsapp"
                    checked={notifications.whatsapp}
                    onCheckedChange={(v) => setNotifications((p) => ({ ...p, whatsapp: v }))}
                  />
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
              <CardDescription>Manage API keys and third-party integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="mtn-key">MTN Mobile Money API Key</Label>
                  <Input id="mtn-key" type="password" defaultValue="mtn_sk_live_xxxxxxxxxxxx" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="airtel-key">Airtel Money API Key</Label>
                  <Input id="airtel-key" type="password" defaultValue="airtel_sk_live_xxxxxxxxxxxx" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="nira-key">NIRA Verification API Key</Label>
                  <Input id="nira-key" type="password" defaultValue="nira_api_xxxxxxxxxxxx" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sms-key">Africa's Talking API Key</Label>
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
      </Tabs>
    </div>
  )
}
