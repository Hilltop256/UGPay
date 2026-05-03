import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function TransactionsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Transactions</h1>
      <p className="text-gray-600 mb-6">View and filter transaction records</p>
      <Link to="/dashboard"><Button>Back to Dashboard</Button></Link>
    </div>
  )
}