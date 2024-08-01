import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";

const public_paths = [
    "/",
    "/auth/login",
    "/auth/register",
    "/auth/register/success",
    "/docs",
    "/docs/api",
    "/docs/blog",
    "/docs/coop",
];

function isPathPublic(path: string) {
    return public_paths.includes(path);
}

// Note that this function only checks if there is a JWT in the cookie.
// It does not check if the JWT is valid. This is handled by the API
export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, url } = event;
    const jwtToken = cookies.get('jwt');
    console.log(jwtToken);
    
    if (!isPathPublic(url.pathname)) {
        if (!jwtToken || jwtToken === undefined) {
            throw redirect(302, '/auth/login');
        }
    }

    return await resolve(event);
};