import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().min(1, "Can't be empty").email('Invalid email address'),
	password: z.string().min(6, 'Password be at least 6 characters'),
});

export const signUpSchema = z
	.object({
		email: z.string().min(1, "Can't be empty").email('Invalid email address'),
		password: z.string().min(6, 'Password be at least 6 characters'),
		confirmPassword: z.string().min(6, 'Password be at least 6 characters'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	});

export const createBookmarkSchema = z.object({
	userId: z.string(),
	mediaId: z.string(),
});
