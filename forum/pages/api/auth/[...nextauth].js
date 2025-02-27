import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [  // 구현하고싶은 로그인 방식
    GithubProvider({  // Github 로그인
      clientId: 'Ov23liZpHgPsxYoLci41',
      clientSecret: 'c0ad81e9cdbc392e1a93a74aef6f4cb11a194fb9',
    }),
  ],
  secret : 'yellow3333blue',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 