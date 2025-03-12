import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const orders = [
    {
        id: "1",
        status: "preparing",
        total: 50,
        table: "No.1",
    },
    {
        id: "2",
        status: "ready",
        total: 150,
        table: "No.3",
    },
    {
        id: "3",
        status: "preparing",
        total: 100,
        table: "takeout",
    },
]

export default function Page() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Orders</h1>
                <Button asChild>
                    <Link href="/order/new">Add</Link>
                </Button>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Table</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>
                                    <Badge className={order.status === "preparing" ? "bg-blue-700" : ""}>{order.status}</Badge>
                                </TableCell>
                                <TableCell>{order.total}</TableCell>
                                <TableCell>{order.table}</TableCell>
                                <TableCell>
                                    <Button className="mr-2">details</Button>
                                    <Button className="bg-red-700 text-white">cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}