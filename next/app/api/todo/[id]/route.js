import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { TableBody } from "@/components/ui/table";

export async function GET(request, {params}) {
    const {id} = await params;
    const todo = await prisma.todo.findUnique({
        where: {id: Number(id)},
    });
    
    if(!todo){
        return NextResponse.json(new Error(`Todo with id ${id} not found.`), {status: 404,});
    }
    return NextResponse.json(todo);
}

export async function DELETE(request, {params}) {
    const {id} = await params;
    try{
        const todo = await prisma.todo.delete({
            where: {id: Number(id)},
        });
        return NextResponse.json(todo);
    }catch(error){
        return NextResponse.json(new Error(`Todo with id ${id} not found.`, {status: 404,}));
    }
}

export async function PATCH(request, {params}) {
    const {id} = await params;
    const data = await request.json();
    try{
        const todo = await prisma.todo.update({
            where: {id: Number(id)},
            data: data,
        });
        return NextResponse.json(todo);
    }catch(error){
        return NextResponse.json(new Error(`Todo with id ${id} not found.`), {status: 404,});
    }
}