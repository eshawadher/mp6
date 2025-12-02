import {signIn} from "@/auth";

export default function SignIn() {
    return(
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
            className="flex justify-center"
        >
            <button
                type="submit"
                className="w-full rounded-lg py-3 text-white font-medium tracking-wide bg-[#1B3C53] hover:bg-[#1B3C53] transition-colors shadow-sm hover:shadow-md"
            >
                Sign in with GitHub
            </button>
        </form>
    )
}