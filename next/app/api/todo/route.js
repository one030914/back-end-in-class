// Restful API
// method GET | POST | PATCH (PUT) | DELETE

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    let todos = await prisma.todo.findMany({ orderBy: [{id: "asc"}]});

    // query: /api/todo?filter=abc
    let queryStr = request.nextUrl.searchParams.get("filter");
    if(!queryStr){
        return NextResponse.json(todos);
    }

    queryStr = queryStr.toLowerCase();
    todos = todos.filter((todo) => todo.title.includes(queryStr));
    if(todos.length == 0){
        return NextResponse.error(new Error(`No todos with ${queryStr} exists.`), {status: 404});
    }
    return NextResponse.json(todos);
}

export async function POST(request) {
    const {title} = await request.json();
    try{
        const todo = await prisma.todo.create({
            data: {title},
        });
        return NextResponse.json(todo);
    }catch(error){
        return NextResponse.json(new Error("Error creating todo."), {status: 500,});
    }    
}