import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
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
  
        if (!form.valid) {
            return message(form, "One or more form fields are invalid");
        }

        console.log('Registering user:', form.data);
  
        // // Perform API fetch to register the user
        // const response = await fetch(`https://${AUTH0_DOMAIN}/api/v2/users`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': `Bearer ${AUTH0_MANAGEMENT_API_KEY}`,
        //     },
        //     body: JSON.stringify({
        //         "connection": "Username-Password-Authentication",
        //         "email": form.data.email,
        //         "password": form.data.password,
        //         "given_name": form.data.firstName,
        //         "family_name": form.data.lastName,
        //         "user_metadata": {
        //             "birthDate": form.data.birthDate,
        //             "languages": form.data.languages
        //         },
        //     }),
        // });

        // console.log('Signup response status:', response.status);
        // console.log('Signup response:', await response.json());

        // if (response.status !== 201) {
        //     return message(form, 'An unexpected error occurred.', {status: 500});
        // }

        // Redirect to success page
        return redirect(303, '/auth/register/success');
    },
};
