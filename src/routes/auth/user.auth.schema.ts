import { z } from 'zod';


export const UserSignupSchema = z.object({
    firstName: z
		.string({
			required_error: 'First name is required'
		})
		.min(1, 'First name is required'),

    lastName: z
		.string({
			required_error: 'Last name is required'
		})
		.min(1, 'Last name is required'),

    email: z
		.string({
			required_error: 'Email is required'
		})
		.min(1, 'Email is required')
		.email('Email is invalid'),

    username: z
		.string({
			required_error: 'Username is required'
		})
		.min(1, 'Username is required'),

	password: z
			.string({
				required_error: 'Password is required'
			})
			.min(1, 'Password is required')
			.min(8, 'Password must be more than 8 characters')
			.max(32, 'Password must be less than 32 characters'),

	passwordConfirm: z
			.string({
				required_error: 'Confirm your password'
			})
			.min(1, 'Confirm your password')
	})
	.refine((data) => data.password === data.passwordConfirm, {
		path: ['passwordConfirm'],
		message: 'Passwords do not match'
	});


export const UserSigninSchema = z.object({
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

export type UserSignupInput = z.infer<typeof UserSignupSchema>;
export type UserSigninInput = z.infer<typeof UserSigninSchema>;