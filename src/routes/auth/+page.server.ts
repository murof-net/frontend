// Loads the form data on the server side, 
// initializing it with validation.

import type { PageServerLoad } from './$types';
import { superValidate } from "sveltekit-superforms";
import { authSchema } from "./auth-schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
    return {
      form: await superValidate(zod(authSchema)),
    };
  };