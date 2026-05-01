import { useState } from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useAuthStore } from "@/stores/auth-store"
import { Loader2, CreditCard } from "lucide-react"

interface LocationState {
  from?: { pathname: string }
}

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isAuthenticated, isLoading } = useAuthStore()
  const [email, setEmail] = useState("admin@ugpay.gov")
  const [password, setPassword] = useState("demo123")
  const [error, setError] = useState("")

  const state = location.state as LocationState | undefined
  const from = state?.from?.pathname || "/dashboard"

  if (isAuthenticated) {
    return <Navigate to={from} replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CreditCard className="size-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">UGPAY</CardTitle>
          <CardDescription>
            Government Payments Platform — Sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ugpay.gov"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="demo123"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="mt-4 rounded-md border bg-muted p-3 text-xs">
            <p className="font-medium">Demo Credentials:</p>
            <p className="text-muted-foreground">
              admin@ugpay.gov / demo123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
