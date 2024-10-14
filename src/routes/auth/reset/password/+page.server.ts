import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { newPasswordSchema } from '../../auth-schemas';

export const load = (async () => {
    const form = await superValidate(zod(newPasswordSchema));
    return { form };
});

export const actions = {
    default: async ({ request, url }) => {
        // Validate form server-side and return any validation errors
        const form = await superValidate(request, zod(newPasswordSchema));
        if (!form.valid) {
            return message(form, "One or more form fields are invalid");
        }
        // Send registration data to the server
        const token = url.searchParams.get('token');
        if (!token) {
            return message(form, "No token provided");
        }
        const { password } = form.data;
        console.log(password);
        console.log(token);
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/reset/password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                return message(form, errorData.detail || "Password reset failed");
            }

            const data = await response.json();
            return message(form, data.message || "Password reset successful");

        } catch (err) {
            return message(form, "An unexpected error occurred");
        }
    }
};