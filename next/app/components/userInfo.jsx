import { auth } from "@/auth";
import Image from "next/image";

export default async function UserInfo() {
    const session = await auth();

    if (!session.user) return null;

    return (
        <div className="flex flex-row items-center my-2 p-4 space-x-4">
            <Image
                src={session.user.image}
                alt="User Avatar"
                width={128}
                height={128}
                className="rounded-full"
            />
            <ul className="m-16 h-32 flex flex-col justify-center items-start rounded-md shadow-lg bg-stone-700 text-white p-4">
                <li className="font-bold text-2xl">{session.user.name}</li>
                <li>{session.user.email}</li>
            </ul>
        </div>
    );
}
