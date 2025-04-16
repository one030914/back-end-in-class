"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function addTodo(formData) {
    const id = Number(formData.get("id"));
    try{
        await prisma.todo.delete({
            where: {id},
        });
        revalidatePath("/todo");
    }catch (error){
        console.log(error);
    }
}