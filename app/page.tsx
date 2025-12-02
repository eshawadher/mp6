import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";


export default async function HomePage() {
    const session = await auth();

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#E3E3E3] to-[#E3E3E3]">
            <header className="px-8 py-6 text-2xl font-semibold tracking-tight text-gray-900">
                CS391 OAuth
            </header>

            <section className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-violet-100 px-10 py-10 text-center">
                    <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900">
                        OAuth Demo
                    </h1>

                    {!session ? (
                        <SignIn />
                    ) : (
                        <div className="space-y-4">
                            {session.user?.image && (
                                <img
                                    src={session.user.image}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-gray-200"
                                />
                            )}
                            {session.user?.name && (
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {session.user.name}
                                </h2>
                            )}
                            {session.user?.email && (
                                <p className="text-gray-600">
                                    {session.user.email}
                                </p>
                            )}
                            <SignOut />
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}