import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { loginSchema } from '../auth-schemas';

// Load function to include zod-validated form
export const load = (async ({ url }) => {
    const form = await superValidate(zod(loginSchema));
    const urlParams = new URLSearchParams(url.search);
    const username = urlParams.get('username');
    if (username) {
        form.data.username = username;
    }
    return { form };
});

// Define request handler for the login form
export const actions = {
    default: async ({ cookies, request }) => {
        // Validate login form server-side and return any validation errors
        const form = await superValidate(request, zod(loginSchema));
        if (!form.valid) {
            return message(form, "One or more form fields are invalid");
        }

        // Send login data to the server
        const { username, password } = form.data;
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/token', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'password',
                    username,
                    password,
                    scope: '',
                    client_id: 'string',
                    client_secret: 'string'
                }).toString()
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Login failed:', errorData);
                return message(form, errorData.detail || "Login failed" );
            }

            const data = await response.json();
            cookies.set('access_token', data.access_token, {
                path: '/',
                httpOnly: true,
            });
            cookies.set('refresh_token', data.refresh_token, {
                path: '/',
                httpOnly: true,
            })

        } catch (error) {
            console.error('Error during login:', error);
            return message(form, "An unexpected error occurred");
        }

        // Redirect or update state after successful login
        throw redirect(302, '/app');
    }
};