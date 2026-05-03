import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import TaxpayersPage from "./pages/TaxpayersPage"
import TransactionsPage from "./pages/TransactionsPage"
import ConfigurationPage from "./pages/ConfigurationPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/taxpayers" element={<TaxpayersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/configuration" element={<ConfigurationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App