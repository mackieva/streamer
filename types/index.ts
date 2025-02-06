import { signInSchema, signUpSchema } from '@/lib/validators';
import { z } from 'zod';

export type SignIn = z.infer<typeof signInSchema>;

export type SignUp = z.infer<typeof signUpSchema>;
