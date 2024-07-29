import { z } from 'zod';

export const signupSchema = z.object({
    email: z.string().email(),
});

export type SignupSchema = typeof signupSchema;