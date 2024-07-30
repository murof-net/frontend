import { fail } from '@sveltejs/kit';
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
  
        // // Perform API fetch to register the user
        // const response = await fetch('http://your-api-url/register', {
        //     method: 'POST',
        //     body: JSON.stringify(form.data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // if (response.ok) {
        //     // Redirect to a success page or perform other actions based on the response
        //     throw redirect(303, '/success');
        // } else {
        //     // Handle error response
        //     // You can display an error message or perform other actions based on the response
        //     return fail(response.status, { form });
        // }
        return {
            form
        }
    },
};