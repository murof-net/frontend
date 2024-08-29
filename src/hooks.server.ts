import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";

// Note that this function only checks if there is a JWT in the cookie.
// It does not check if the JWT is valid. This is handled by the API
export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, url } = event;
    const jwtToken = cookies.get('jwt');
    // console.log(url.pathname);

    if (url.pathname.startsWith('/appi')) {
        if (!jwtToken || jwtToken === undefined) {
            throw redirect(302, '/auth/login');
        }
    }

    return await resolve(event);
};
