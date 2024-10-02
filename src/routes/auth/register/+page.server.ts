import { redirect } from '@sveltejs/kit';
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

        // Send registration data to the server
        const { username, email, password } = form.data;
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
                return message(form, errorData.detail || "Registration failed" );
            }

        } catch (error) {
            console.error('Error during registration:', error);
            return message(form, "An unexpected error occurred");
        }

        return redirect(303, `/auth/register/success?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`);
    },
};