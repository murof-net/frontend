import { z } from 'zod';

const passwordValidation = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[.?!#$%^&*]).{8,}$");
const usernameValidation = new RegExp("^[a-zA-Z0-9_]*$");

export const loginSchema = z.object({
    username: z
        .string({
            required_error: 'Username or email is required'
        }),
    password: z
        .string({
            required_error: 'Password is required'
        })
        .max(32, 'Password must be less than 32 characters')
        .regex(passwordValidation, 'Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character'),
});

export const registerSchema = z.object({
    username: z
        .string({
            required_error: 'Username is required'
        })
        .min(3, 'Username must be at least 3 characters long')
        .max(32, 'Username must be less than 32 characters')
        .regex(usernameValidation, 'Username can only contain letters, numbers, and underscores'),
    email: z
        .string({
            required_error: 'Email is required'
        })
        .email('Email is invalid'),
    emailConfirm: z
        .string({
            required_error: 'Confirm your email'
        })
        .email('Email is invalid'),
    password: z
        .string({
            required_error: 'Password is required'
        })
        .max(32, 'Password must be less than 32 characters')
        .regex(passwordValidation, 'Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character'),
    passwordConfirm: z
        .string({
            required_error: 'Confirm your password'
        })
})
.refine((data) => data.email === data.emailConfirm, {
    path: ['emailConfirm'],
    message: 'Emails do not match'
})
.refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
});

export const newPasswordSchema = z.object({
    password: z
        .string({
            required_error: 'Password is required'
        })
        .max(32, 'Password must be less than 32 characters')
        .regex(passwordValidation, 'Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character'),
    passwordConfirm: z
        .string({
            required_error: 'Confirm your password'
        })
})
.refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
});

export type LoginSchema = typeof loginSchema;
export type RegisterSchema = typeof registerSchema;
export type NewPasswordSchema = typeof newPasswordSchema