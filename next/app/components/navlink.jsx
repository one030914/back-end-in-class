"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ href, children}) {
    const pathname = usePathname()
    return (
      <Link href={href} className={`${pathname === href ? "bg-stone-800 text-white font-semibold" : "bg-stone-200 text-black font-normal"} block px-4 py-2 rounded-md hover:bg-gray-400 hover:text-black transition-colors`}>
        {children}
      </Link>
    );
}