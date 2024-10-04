import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { newPasswordSchema } from '../../auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(newPasswordSchema));
    return { form };
});

export const actions = {
    default: async ({ request }) => {
        // Validate form server-side and return any validation errors
        const form = await superValidate(request, zod(newPasswordSchema));
        if (!form.valid) {
            return message(form, "One or more form fields are invalid");
        }

        // Send registration data to the server
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (!token) {
            return message(form, "No token provided");
        }
        const { password } = form.data;
        console.log(password);
        console.log(token);
    }
}