import {
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom"
import { Suspense, lazy } from "react"
import AppShell from "@/components/app-shell"
import LoginPage from "@/pages/LoginPage"
import { useAuthStore } from "@/stores/auth-store"

const DashboardPage = lazy(() => import("@/pages/DashboardPage"))
const TaxpayersPage = lazy(() => import("@/pages/TaxpayersPage"))
const TransactionsPage = lazy(() => import("@/pages/TransactionsPage"))
const SettingsPage = lazy(() => import("@/pages/SettingsPage"))
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-48 items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <AppShell>{children}</AppShell>
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthenticatedLayout>
        <SuspenseWrapper>
          <DashboardPage />
        </SuspenseWrapper>
      </AuthenticatedLayout>
    ),
  },
  {
    path: "/taxpayers",
    element: (
      <AuthenticatedLayout>
        <SuspenseWrapper>
          <TaxpayersPage />
        </SuspenseWrapper>
      </AuthenticatedLayout>
    ),
  },
  {
    path: "/transactions",
    element: (
      <AuthenticatedLayout>
        <SuspenseWrapper>
          <TransactionsPage />
        </SuspenseWrapper>
      </AuthenticatedLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <AuthenticatedLayout>
        <SuspenseWrapper>
          <SettingsPage />
        </SuspenseWrapper>
      </AuthenticatedLayout>
    ),
  },
  {
    path: "*",
    element: (
      <AuthenticatedLayout>
        <SuspenseWrapper>
          <NotFoundPage />
        </SuspenseWrapper>
      </AuthenticatedLayout>
    ),
  },
])
