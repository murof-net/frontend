import { fail, redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { registerSchema } from '../auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(registerSchema));
  
    // Always return { form } in load functions
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        // Validate form server-side and return any validation errors
        const form = await superValidate(request, zod(registerSchema));
        console.log("registration");
        console.log(form);
  
        if (!form.valid) {
            console.log("invalid");
            return fail(400, { form });
        }
  
        // Perform API fetch to register the user
        const response = await fetch('http://127.0.0.1:8000/auth/register', {
            method: 'POST',
            body: JSON.stringify(form.data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Handle response and redirect to success page
        if (!response.ok) {
            return fail(500, { form });
        }

        // Redirect to success page
        return redirect(303, '/auth/register/success');
    },
};
