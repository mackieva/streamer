'use server';

import { signUpSchema } from '../validators';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/db';

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

		console.log(cleanpassword);

		await prisma.user.create({
			data: {
				email,
				password: cleanpassword,
			},
		});

		console.log('user created');
	} catch (e) {
		console.log(`${e}`);
	}
}
