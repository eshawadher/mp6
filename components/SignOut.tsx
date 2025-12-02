import {signOut} from "@/auth";

export default function SignOut() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
            className="flex justify-center mt-4"
        >
            <button
                type="submit"
                className="w-full rounded-lg py-3 text-gray-700 font-medium tracking-wide bg-gray-200 hover:bg-gray-300 transition-colors shadow-sm hover:shadow-md"
            >
                Sign Out
            </button>
        </form>
    )
}