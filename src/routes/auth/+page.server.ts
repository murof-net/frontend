import type { PageServerLoad, Actions } from './$types';
import { superValidate } from "sveltekit-superforms";
import { authSchema } from "./auth-schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
    return {
      form: await superValidate(zod(authSchema)),
    };
};

export const actions: Actions = {
  default: async ({ request }) => {

      const data = await request.formData();
      const email = data.get('email')?.toString(); // Ensure email is a string

      const response = await fetch('http://127.0.0.1:8000/auth/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log("result in +page.server.ts");
      console.log(result);
      if (result.ok) {
          console.log('Success!');
          return { success: true };
      } else {
          console.log('Failure!');
          return { success: false };
      }
  }
};