// Difines Zod schema for the authentication form
// to validate the email field

import { z } from "zod";
 
export const authSchema = z.object({
  email: z.string().email(),
});
 
export type AuthSchema = typeof authSchema;