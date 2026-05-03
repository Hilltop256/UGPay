import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { agencies } from "@/store/agencies"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedAgency, setSelectedAgency] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
          <span className="text-3xl font-bold text-white">U</span>
        </div>
        <h1 className="text-3xl font-bold text-white">UGPAY</h1>
        <p className="text-sm text-slate-400">Municipal Revenue Collection Platform</p>
      </div>

      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>Select your municipality and enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="agency">Municipality</Label>
              <Select value={selectedAgency} onValueChange={setSelectedAgency}>
                <SelectTrigger id="agency">
                  <SelectValue placeholder="Select municipality" />
                </SelectTrigger>
                <SelectContent>
                  {agencies.map((agency) => (
                    <SelectItem key={agency.id} value={agency.id}>
                      <div className="flex items-center justify-between w-full gap-2">
                        <span className="font-medium">{agency.code}</span>
                        <span className="text-muted-foreground truncate">{agency.name.replace(agency.code, "").replace(/Council|Authority|City/g, "").trim()}</span>
                        <Badge variant={agency.type === "capital" ? "default" : "secondary"} className="ml-auto text-[10px] shrink-0">
                          {agency.type === "capital" ? "Capital City" : agency.type === "municipal" ? "Municipal" : agency.type === "district" ? "District" : "Sub-county"}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@agency.go.ug"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button type="button" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </form>
          <Separator className="my-4" />
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2024 UGPAY. Republic of Uganda
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
