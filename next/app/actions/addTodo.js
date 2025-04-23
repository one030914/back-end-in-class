"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function addTodo(formData) {
    const title = formData.get("title");
    if (!title) return;
    try {
        await prisma.todo.create({
            data: { title },
        });
        revalidatePath("/todo");
    } catch (error) {
        console.log(error);
    }
}
