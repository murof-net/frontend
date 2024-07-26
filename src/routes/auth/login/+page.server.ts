import type { PageServerLoad } from './$types';
import { superValidate } from "sveltekit-superforms";
import { loginSchema } from "./login-schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({ url }) => {
  const email = url.searchParams.get('email') || '';

  return {
    form: await superValidate(zod(loginSchema), { email }),
  };
};
