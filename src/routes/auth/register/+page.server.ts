import { fail, redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { registerSchema } from '../auth-schemas';

import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '$env/static/private';

export const load = (async () => {
    const form = await superValidate(zod(registerSchema));
  
    // Always return { form } in load functions
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        // Validate form server-side and return any validation errors
        const form = await superValidate(request, zod(registerSchema));
  
        if (!form.valid) {
            return fail(400, { form });
        }
  
        // Perform API fetch to register the user
        const response = await fetch(`https://${AUTH0_DOMAIN}/dbconnections/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: AUTH0_CLIENT_ID,
                email: form.data.email,
                password: form.data.password,
                connection: 'Username-Password-Authentication'
            })
        });

        // Handle response and redirect to success page
        if (!response.ok) {
            return fail(500, { form });
        }

        // Redirect to success page
        return redirect(303, '/auth/register/success');
    },
};
