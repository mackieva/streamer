'use server';

import { signUpSchema, signInSchema } from '../validators';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/db';
import { signIn, signOut } from '@/auth';

export async function userSignUp(prevState: unknown, formData: FormData) {
	try {
		const validatedData = signUpSchema.safeParse({
			email: formData.get('email'),
			password: formData.get('password'),
			confirmPassword: formData.get('confirmPassword'),
		});

		if (!validatedData.success) {
			return { errors: validatedData.error.flatten().fieldErrors };
		}

		const { email, password } = validatedData.data;

		const cleanpassword = hashSync(password, 10);

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
}
