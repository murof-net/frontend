import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { loginSchema } from '../auth-schemas';

import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_AUDIENCE } from '$env/static/private';

// Load function to include zod-validated form
export const load = (async () => {
    const form = await superValidate(zod(loginSchema));
    
    // Always return { form } in load functions
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

        // Perform API fetch to login the user and get the access token
        const response = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: AUTH0_CLIENT_ID,
                client_secret: AUTH0_CLIENT_SECRET,  // Correct the secret here
                username: form.data.email,
                password: form.data.password,
                audience: AUTH0_AUDIENCE,
                scope: 'openid profile email',  // Include any necessary scopes
                connection: 'Username-Password-Authentication',  // Update connection name
            }),
        });
        console.log('Login response status:', response.status);

        // Return status codes with custom messages based on API response
        if (response.status === 401 || response.status === 403) {
            return message(form, 'Wrong email or password.', {status: response.status});
        } else if (response.status !== 200) {
            return message(form, 'An unexpected error occurred.', {status: 500});
        }

        // Set JWT in cookie
        const responseData = await response.json();
        cookies.set('jwt', responseData.access_token, {
            path: '/',
            httpOnly: true,
        });

        // Redirect or update state after successful login
        throw redirect(302, '/app');
    }
};