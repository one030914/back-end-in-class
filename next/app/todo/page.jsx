import prisma from "@/lib/prisma"
import addTodo from "@/app/actions/addTodo";
import deleteTodo from "@/app/actions/deleteTodo"

export default async function Page() {
    const todos = await prisma.todo.findMany({
        orderBy: [{ id: "asc" }],
    });
    
    return(
        <main className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-6">Todo List</h1>
            <form action={addTodo} className="mb-4">
                <input type="text" name="title" placeholder="Add a new todo" className="shadow appearance-none border rounded py-2 px-3 text-black mr-2"/>
                <button type="submit" className="bg-stone-500 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded shadow my-2">
                        <span>{todo.title}</span>
                        <div className="flex flex-wrap gap-2">
                            <form action={deleteTodo}>
                                <input type="hidden" name="id" id={todo.id} value={todo.id}/>
                                <button type="submit" className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </form>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}