import { z } from 'zod';

export const signupSchema = z.object({
    email: z.string().email().default('example@email.com'),
});

export type SignupSchema = typeof signupSchema;