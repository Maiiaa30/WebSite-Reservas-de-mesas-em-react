import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const options = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
    // EmailProvider({
    //   server: {
    //     host: "",
    //     port: "",
    //     auth: {
    //       user: "",
    //       pass: "",
    //     },
    //   },
    //   from: "",
    // }),
  ],
};

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "660539645218-3njomnurd1ta7f7ml162v8ruq8dl80s7.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // EmailProvider({
    //   server: {
    //     host: "",
    //     port: "",
    //     auth: {
    //       user: "",
    //       pass: "",
    //     },
    //   },
    //   from: "",
    // }),
  ],
});
