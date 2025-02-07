import { signInSchema, signUpSchema } from '@/lib/validators';
import { JsonValue } from 'next-auth/adapters';
import { z } from 'zod';

export type initialSignupState = {
	message?: string;
	errors?: {
		email?: string[];
		password?: string[];
		confirmPassword?: string[];
	};
};

export type SignIn = z.infer<typeof signInSchema>;

export type SignUp = z.infer<typeof signUpSchema>;

export type Media = {
	id: string;
	title: string;
	year: number;
	category: string;
	rating: string;
	thumbnail: JsonValue;
};
