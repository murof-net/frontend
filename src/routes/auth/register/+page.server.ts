import type { PageServerLoad } from './$types';
import { superValidate } from "sveltekit-superforms";
import { registerSchema } from "./register-schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({ url }) => {
  const email = url.searchParams.get('email') || '';
  const form = await superValidate(zod(registerSchema));

  // Fill out email if user passed it on from auth route
  if (email) {
    form.data.email = email;
  }

  return {
    form,
  };
};
