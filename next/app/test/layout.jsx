"use client";
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

const linkSet = [
    {href: "/test/test1", text: "Test-1"},
    {href: "/test/test2", text: "Test-2"},
]

export default function Layout({children}) {
    const [count, setCount] = useState(0);
    const pathname = usePathname();
    return(
        <div className="border-2 border-dashed bg-stone-300 p-4">
            <div className="flex gap-4 font-bold text-lg mb-4 text-black">
                {linkSet.map((link) => (
                    <Link key={link.href} href={link.href} className="text-white bg-stone-700 rounded-md hover:text-stone-700 hover:bg-stone-400 p-2">
                        {link.text}
                    </Link>
                ))}
            </div>
        <div className="flex">
            Text Layout <span className="px-2 font-bold">{count}</span> 
            pathname: <span>{pathname}</span>
        </div>
        <Button onClick={() => setCount(count + 1)} className="bg-green-600 text-white my-2">
            +1
        </Button>
        {children}
        </div>
    )
}