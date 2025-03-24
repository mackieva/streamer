import {
	signInSchema,
	signUpSchema,
	createBookmarkSchema,
} from '@/lib/validators';
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
	thumbnail: JsonObject;
};

export type JsonObject = { [key: string]: any };

export type CreateBookmark = z.infer<typeof createBookmarkSchema>;
