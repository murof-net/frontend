import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { loginSchema } from './auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(loginSchema));
  
    // Always return { form } in load functions
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        // Validate login form server-side and return any validation errors
        const form = await superValidate(request, zod(loginSchema));
        if (!form.valid) {
            return fail(400, { form });
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

        // Handle response and store the JWT
        if (!response.ok) {
            return fail(500, { form });
        }
        const responseData = await response.json();
        if (!responseData.access_token) {
            return fail(500, { form });
        }
        request.headers.set('Authorization', `Bearer ${responseData.access_token}`);

        // Redirect or update state after successful login
        throw redirect(302, '/app');
    }
};