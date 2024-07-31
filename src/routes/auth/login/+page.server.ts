import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { loginSchema } from '../auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(loginSchema));
    
    // Always return { form } in load functions
    return { form };
});

export const actions = {
    default: async ({ cookies, request }) => {
        // Validate login form server-side and return any validation errors
        const form = await superValidate(request, zod(loginSchema));
        if (!form.valid) {
            return message(form, "One or more form fields are invalid");
        }

        // Perform API fetch to login the user and get back the JWT
        const response = await fetch('http://127.0.0.1:8000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${form.data.email}&password=${form.data.password}`
        });
        console.log(response);

        // Return status codes with custom messages based on API response
        if (response.status === 401) {
            return message(form, 'Incorrect email or password', {status: 401});
        } else if (response.status !== 200) {
            return message(form, 'An unexpected error occurred', {status: 500});
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