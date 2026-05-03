import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function TaxpayersPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Taxpayers</h1>
      <p className="text-gray-600 mb-6">Manage registered taxpayers and create obligations</p>
      <Link to="/dashboard"><Button>Back to Dashboard</Button></Link>
    </div>
  )
}