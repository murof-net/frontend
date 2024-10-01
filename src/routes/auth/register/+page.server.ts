import { redirect, fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { registerSchema } from '../auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(registerSchema));
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        // Validate form server-side and return any validation errors
        const form = await superValidate(request, zod(registerSchema));
        if (!form.valid) {
            return message(form, "One or more form fields are invalid");
        }

        console.log('Registering user:', form.data);
        const { username, email, password } = form.data;

        // Perform API fetch to register the user
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Registration failed:', errorData);
                return fail(response.status, { form, message: errorData.detail || "Registration failed" });
            }
            console.log('Registration successful');
        } catch (error) {
            console.error('Error during registration:', error);
            return fail(500, { form, message: "An unexpected error occurred" });
        }

        return redirect(303, `/auth/register/success?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`);
    },
};