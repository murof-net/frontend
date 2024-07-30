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
        console.log("login");
        const form = await superValidate(request, zod(loginSchema));
        console.log(form);
  
        if (!form.valid) {
            return fail(400, { form });
        }

        // Perform murof API fetch to login the user
        // const response = await fetch('/auth/login', {
        //     method: 'POST',
        //     body: JSON.stringify(form.data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        return {
            form
        }
    },
};