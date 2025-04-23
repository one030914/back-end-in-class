"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function addTodo(formData) {
    const id = Number(formData.get("id"));
    const isDone = formData.get("isDone") === "true";
    try {
        await prisma.todo.update({
            where: { id },
            data: { isDone: !isDone }
        });
        revalidatePath("/todo");
    } catch (error) {
        console.log(error);
    }
}
