import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const {handlers, auth, signIn, signOut} = NextAuth(
    {
        providers: [GitHub],
    });