import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
// import { Providers } from "next-auth/react";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
