import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies }) => {
        // Remove the JWT cookie
        cookies.set('jwt', '', {
          path: '/',
          httpOnly: true,
        });
        throw redirect(303, '/');
    }
};