import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './db/db';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';

export const { handlers, signIn, signOut, auth } = NextAuth({
	pages: {
		signIn: '/sign-in',
		error: '/sign-in',
	},
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60,
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			credentials: {
				email: { type: 'email' },
				password: { type: 'password' },
			},
			async authorize(credentials) {
				if (credentials === null) {
					return null;
				}

				//Find user in db
				const user = await prisma.user.findFirst({
					where: {
						email: credentials.email as string,
					},
				});

				//Check user is found and password matches
				if (user && user.password) {
					const isMatch = compareSync(
						credentials.password as string,
						user.password
					);

					if (isMatch) {
						return {
							id: user.id,
							email: user.email,
						};
					}
				}

				// If user isn't found or password doesn't match bail
				return null;
			},
		}),
	],
	callbacks: {
		async session({ session, token }: any) {
			session.user.id = token.sub;
			session.user.email = token.email;

			return session;
		},
	},
});
