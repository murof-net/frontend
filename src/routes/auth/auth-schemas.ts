import { z } from 'zod';

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*\\-]).{8,}$");

// export const languagesEnum = ["Chinese", "Dutch", "English", "French", "German", "Indian", "Japanese", "Korean", "Spanish"] as const;

// export const languagesSelect = [
//     { value: "zh", label: "Chinese" },
//     { value: "nl", label: "Dutch" },
//     { value: "en", label: "English" },
//     { value: "fr", label: "French" },
//     { value: "de", label: "German" },
//     { value: "hi", label: "Indian" },
//     { value: "ja", label: "Japanese" },
//     { value: "ko", label: "Korean" },
//     { value: "es", label: "Spanish" },
// ]

export const loginSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required'
        })
        .email('Email is invalid'),
    password: z
        .string({
            required_error: 'Password is required'
        })
        .max(32, 'Password must be less than 32 characters')
        .regex(passwordValidation, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
});

export const registerSchema = z.object({
    firstName: z
        .string({
            required_error: 'First name is required'
        }),
    lastName: z
        .string({
            required_error: 'Last name is required'
        }),
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
        .regex(passwordValidation, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
    passwordConfirm: z
        .string({
            required_error: 'Confirm your password'
        }),
    birthDate: z
        .string({
            required_error: 'Birth date is required'
        }),
        // TODO: use enum instead of free text
    languages: z
        .string({
            required_error: 'Add at least one language'
        }),
})
.refine((data) => data.email === data.emailConfirm, {
    path: ['emailConfirm'],
    message: 'Emails do not match'
})
.refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
});

export type LoginSchema = typeof loginSchema;
export type RegisterSchema = typeof registerSchema;
