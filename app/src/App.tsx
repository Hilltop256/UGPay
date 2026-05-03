import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import TaxpayersPage from "./pages/TaxpayersPage"
import TransactionsPage from "./pages/TransactionsPage"
import ConfigurationPage from "./pages/ConfigurationPage"
import ReportsPage from "./pages/ReportsPage"
import StaffPage from "./pages/StaffPage"
import AuditLogPage from "./pages/AuditLogPage"
import DashboardLayout from "./components/DashboardLayout"
import { AgencyProvider } from "./store/agency-context"

function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
          <span className="text-3xl font-bold text-white">U</span>
        </div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">UGPAY Demo</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
          Experience the future of municipal revenue collection in Uganda
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Revenue Dashboard", desc: "Real-time collection analytics" },
            { label: "Taxpayer Registry", desc: "Manage taxpayer profiles and obligations" },
            { label: "Payment Processing", desc: "Mobile money and bank integrations" },
            { label: "Automated Reports", desc: "Compliance tracking and trends" },
            { label: "Reconciliation", desc: "Auto-match payments to obligations" },
            { label: "Multi-Tenant", desc: "KCCA, Wakiso, Jinja and more" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500"
            >
              <h3 className="font-semibold text-white">{item.label}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <AgencyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
          <Route path="/taxpayers" element={<DashboardLayout><TaxpayersPage /></DashboardLayout>} />
          <Route path="/transactions" element={<DashboardLayout><TransactionsPage /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><ReportsPage /></DashboardLayout>} />
          <Route path="/staff" element={<DashboardLayout><StaffPage /></DashboardLayout>} />
          <Route path="/audit-log" element={<DashboardLayout><AuditLogPage /></DashboardLayout>} />
          <Route path="/configuration" element={<DashboardLayout><ConfigurationPage /></DashboardLayout>} />
          <Route path="/payment-plans" element={<DashboardLayout><div className="flex items-center justify-center h-96"><p className="text-muted-foreground">Payment Plans - Coming Soon</p></div></DashboardLayout>} />
        </Routes>
      </BrowserRouter>
    </AgencyProvider>
  )
}

export default App
