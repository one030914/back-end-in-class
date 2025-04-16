"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
    const [count, setCount] = useState(0);
    return (
        <div className="border-2 border-dashed bg-stone-300 p-4">
            <div className="flex">
                Text Layout <span className="px-2 font-bold">{count}</span>
            </div>
            <Button onClick={() => setCount(count + 1)} className="bg-blue-600 text-white my-2">
                +1
            </Button>
            {children}
        </div>
    );
}
