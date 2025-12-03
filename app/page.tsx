import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";

export default async function HomePage() {
    const session = await auth();

    return (
        <main className="page">
            <header className="page-header">
                CS391 OAuth
            </header>

            <section className="page-section">
                <div className="auth-card">
                    <h1 className="auth-card-title">
                        OAuth Demo
                    </h1>

                    {!session ? (
                        <SignIn />
                    ) : (
                        <div className="user-info">
                            {session.user?.image && (
                                <img
                                    src={session.user.image}
                                    alt="Profile"
                                    className="user-avatar"
                                />
                            )}
                            {session.user?.name && (
                                <h2 className="user-name">
                                    {session.user.name}
                                </h2>
                            )}
                            {session.user?.email && (
                                <p className="user-email">
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
