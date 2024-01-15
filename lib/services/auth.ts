import dbConnect from "../db/mongodb";
import User from "../db/models/user";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export async function login(credentials: any) {
  try {
    const { email, password } = credentials;
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
        token.countries = user.countries;
        token.isAdmin = await ensureAdmin(user.id);
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.email = token.email;
      session.user.id = token.id;
      session.user.countries = token.countries;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};

export async function ensureAdmin(id: string) {
  await dbConnect();
  const user = await User.findById(id);
  if (!user) {
    return false;
  }
  return user.isAdmin;
}
