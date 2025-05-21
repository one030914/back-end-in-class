import { signOutAction } from "../actions/myAuth";
import { Button } from "@/components/ui/button";

export default async function SignOutButton() {
    return (
        <form action={signOutAction}>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
                Sign Out
            </Button>
        </form>
    );
}
