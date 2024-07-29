import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { signupSchema } from './auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(signupSchema));
  
    // Always return { form } in load functions
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(signupSchema));
        console.log(form);
  
        if (!form.valid) {
            return fail(400, { form });
        }
  
        return {
            form: JSON.stringify(form),
        }
    },
};