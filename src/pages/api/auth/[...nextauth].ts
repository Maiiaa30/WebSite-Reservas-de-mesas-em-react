import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "660539645218-3njomnurd1ta7f7ml162v8ruq8dl80s7.apps.googleusercontent.com",
      clientSecret: "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",
    }),

    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),

    FacebookProvider({
      clientId: "1002990557255096",
      clientSecret: "104218c08e478c0f3b29b2401b8e7105",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});
