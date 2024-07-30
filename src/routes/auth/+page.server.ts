import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { loginSchema } from './auth-schemas';
import { toast } from "svelte-sonner";

export const load = (async () => {
    const form = await superValidate(zod(loginSchema));
  
    // Always return { form } in load functions
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(loginSchema));
        console.log("login");
        console.log(form);
        
  
        if (!form.valid) {
            return fail(400, { form });
        }
  
        return {
            form
        }
    },
};