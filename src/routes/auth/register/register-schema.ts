import { z } from "zod";

export const languagesEnum = ["English", "French", "Dutch", "Spanish", "Korean"] as const;
 
export const registerSchema = z.object({
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
    .min(1, 'Confirm your password'),

birthDate: z
  .string({
    required_error: 'Birth date is required'
  })
  .min(1, 'Birth date is required'),

languages: z
  .array(z.enum(languagesEnum))
  .min(1, 'Please select at least one language')
})
.refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match'
});
 
export type RegisterSchema = typeof registerSchema;