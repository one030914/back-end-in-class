"use client";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Hero({ imgUrl, context }) {
    const pathname = usePathname();
    return (
        <div className="min-h-dvh">
            <div className="absolute inset-0 -z-10">
                <Image src={imgUrl} fill style={{ objectFit: "cover" }} alt={pathname} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
            </div>
            <div className="h-full top-36 left-72 absolute inset-x-0">
                <div className={`${pacifico.className} text-white text-6xl font-bold mt-6`}>
                    {context}
                </div>
            </div>
        </div>
    );
}
