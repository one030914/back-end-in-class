"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";

const linkSet = [
    { href: "/home/performance", text: "Performance" },
    { href: "/home/reliability", text: "Reliability" },
    { href: "/home/scale", text: "Scale" },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto my-0">
            <div>
                <Button
                    asChild
                    className="bg-stone-200 text-stone-700 hover:bg-stone-700 hover:text-stone-200"
                >
                    <div>
                        <House color="gray" />
                        <Link href="/home">
                            <span className="text-2xl font-bold">Home</span>
                        </Link>
                    </div>
                </Button>
            </div>
            <div className="flex flex-wrap gap-2">
                {linkSet.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                            pathname === link.href
                                ? "bg-stone-700 text-stone-200"
                                : "bg-stone-200 text-stone-700"
                        } hover:bg-stone-400 hover:text-white rounded-md p-2`}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
}
