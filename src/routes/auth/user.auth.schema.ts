import { z } from 'zod';

export const UserLoginSchema = z.object({
    email: z
		.string({
			required_error: 'Email is required'
		})
		.min(1, 'Email is required')
		.email('Email is invalid'),
        
	password: z
		.string({
			required_error: 'Password is required'
		})
		.min(1, 'Password is required')
		.min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must be less than 32 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter and one number')
    });

export type UserSigninInput = z.infer<typeof UserLoginSchema>;