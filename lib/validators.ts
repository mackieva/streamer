import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().min(1, "Can't be empty"),
	password: z.string().min(1, "Can't be empty"),
});

export const signUpSchema = z
	.object({
		email: z.string().min(1, "Can't be empty"),
		password: z.string().min(1, "Can't be empty"),
		confirmPassword: z.string().min(1, "Can't be empty"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	});

export const createBookmarkSchema = z.object({
	userId: z.string(),
	mediaId: z.string(),
});
