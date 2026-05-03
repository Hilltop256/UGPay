import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Agency Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome to the UGPAY Agency Portal</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Today's Revenue</CardTitle>
            <CardDescription>UGX 2,450,000</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">124 transactions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Registered Taxpayers</CardTitle>
            <CardDescription>Total enrolled</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,245</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
            <CardDescription>Awaiting confirmation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Reports Generated</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex gap-4">
        <Link to="/taxpayers"><Button>Taxpayers</Button></Link>
        <Link to="/transactions"><Button>Transactions</Button></Link>
        <Link to="/configuration"><Button>Configuration</Button></Link>
      </div>
    </div>
  )
}