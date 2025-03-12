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

const items = [
    {
        id: "1",
        name: "bacon",
        stock: 20,
        minStock: 10
    },
    {
        id: "2",
        name: "egg",
        stock: 8,
        minStock: 20
    },
    {
        id: "3",
        name: "bread",
        stock: 20,
        minStock: 15
    },
    
]

export default function Page() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Orders</h1>
                <Button asChild>
                    <Link href="/item/new">Add</Link>
                </Button>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Current Stock</TableHead>
                            <TableHead>Min Stock</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <Badge className={item.stock < item.minStock ? "bg-red-700" : ""}>{`${item.stock}${items.stock < item.minStock ? " (not enough)" : ""}`}</Badge>
                                </TableCell>
                                <TableCell>{item.minStock}</TableCell>
                                <TableCell>
                                    <Button className="bg-green-700">edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}