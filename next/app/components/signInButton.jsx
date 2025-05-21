import { signInAction } from "../actions/myAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function SignInButton({ provider, btnText, bunCss }) {
    return (
        <form action={signInAction}>
            <Button type="submit" name="provider" value={provider} className={`${bunCss}`}>
                <div className="flex items-center p-2 text-xl gap-2">
                    <Image
                        src={`/${provider}.svg`}
                        alt={`${provider} logo`}
                        width={20}
                        height={20}
                        className="w-8 h-8 p-2 inline-block bg-stone-400/50"
                    />
                    {btnText}
                </div>
            </Button>
        </form>
    );
}
