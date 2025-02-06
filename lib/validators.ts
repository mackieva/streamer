import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().min(1, "Can't be empty").email('Invalid email address'),
	password: z.string().min(6, 'Password be at least 6 characters'),
});

export const signUpSchema = z.object({
	email: z.string().min(1, "Can't be empty").email('Invalid email address'),
	password: z.string().min(6, 'Password be at least 6 characters'),
	confirmPassword: z.string().min(6, 'Password be at least 6 characters'),
});
