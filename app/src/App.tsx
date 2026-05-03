import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import TaxpayersPage from "./pages/TaxpayersPage"
import TransactionsPage from "./pages/TransactionsPage"
import ConfigurationPage from "./pages/ConfigurationPage"
import DashboardLayout from "./components/DashboardLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
        <Route path="/taxpayers" element={<DashboardLayout><TaxpayersPage /></DashboardLayout>} />
        <Route path="/transactions" element={<DashboardLayout><TransactionsPage /></DashboardLayout>} />
        <Route path="/configuration" element={<DashboardLayout><ConfigurationPage /></DashboardLayout>} />
        <Route path="/payment-plans" element={<DashboardLayout><div className="flex items-center justify-center h-96"><p className="text-muted-foreground">Payment Plans - Coming Soon</p></div></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
