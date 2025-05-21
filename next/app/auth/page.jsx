import SignInButton from "../components/signInButton";
import SignOutButton from "../components/signOutButton";
import UserInfo from "../components/userInfo";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                <SignInButton
                    provider="github"
                    btnText="Sign in with GitHub"
                    btnClass="bg-stone-400/50 hover:bg-stone-400/70 text-white font-bold py-2 px-4 rounded"
                />
                <SignInButton
                    provider="google"
                    btnText="Sign in with Google"
                    btnClass="bg-stone-400/50 hover:bg-stone-400/70 text-white font-bold py-2 px-4 rounded"
                />
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="font-bold text-4xl">Welcome</h1>
            <UserInfo />
            <SignOutButton />
        </div>
    );
}
