'use server';

import { signUpSchema, signInSchema } from '../validators';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/db';
import { signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export async function userSignUp(prevState: unknown, formData: FormData) {
	const data = Object.fromEntries(formData);

	const validatedData = signUpSchema.safeParse(data);

	if (!validatedData.success) {
		return {
			errors: validatedData.error.flatten().fieldErrors,
			email: formData.get('email') as string,
		};
	}

	const { email, password } = validatedData.data;

	const cleanpassword = hashSync(password, 10);

	try {
		await prisma.user.create({
			data: {
				email,
				password: cleanpassword,
			},
		});

		await signIn('credentials', { email, password });
	} catch (e) {
		console.log(`${e}`);
	}

	redirect('/');
}

export async function userSignIn(prevState: unknown, formData: FormData) {
	const validatedData = signInSchema.safeParse({
		email: formData.get('email'),
		password: formData.get('password'),
	});

	if (!validatedData.success) {
		return { errors: validatedData.error.flatten().fieldErrors };
	}

	await signIn('credentials', validatedData.data);
}

export async function userSignOut() {
	await signOut();

	redirect('/sign-in');
}
