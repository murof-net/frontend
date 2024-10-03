import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { newPasswordSchema } from '../../auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(newPasswordSchema));
    return { form };
});