// import type { PageServerLoad, Actions } from './$types';
// import { superValidate } from "sveltekit-superforms";
// import { authSchema } from "./auth-schema";
// import { zod } from "sveltekit-superforms/adapters";

// export const load: PageServerLoad = async () => {
//     return {
//       form: await superValidate(zod(authSchema)),
//     };
// };

// export const actions: Actions = {
//   default: async ({ request }) => {

//       const data = await request.formData();
//       const email = data.get('email')?.toString(); // Ensure email is a string

//       const response = await fetch('http://127.0.0.1:8000/auth/', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email }),
//       });

//       const result = await response.json();
//       console.log("result in +page.server.ts");
//       console.log(result);
//       if (result.ok) {
//           console.log('Success!');
//           return { success: true };
//       } else {
//           console.log('Failure!');
//           return { success: false };
//       }
//   }
// };

import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { signupSchema } from './auth-schemas.js';

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
  
      return message(
        form, 
        "Thank you for signing up!")
    },
  }