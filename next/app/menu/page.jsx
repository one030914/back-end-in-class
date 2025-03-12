import { Button } from "@/components/ui/button"
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

const foods = [
    {
        id: "1",
        name: "Soy milk",
        price: 25,
    },
    {
        id: "2",
        name: "milk tea",
        price: 25,
    },
    {
        id: "3",
        name: "egg roll",
        price: 50,
    },
]

export default function Page() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Menu</h1>
                <Button className="bg-blue-500 hover:bg-blue-800">Add</Button>
            </div>
            <div className="bg-stone-300 p-4 rounded-lg shadow mb-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {foods.map((food) => (
                            <TableRow key={food.id}>
                                <TableCell>{food.name}</TableCell>
                                <TableCell>{food.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}