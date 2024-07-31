import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";

const public_paths = [
    "/",
    "/auth/login",
    "/auth/register",
    "/auth/register/success",
    "/docs",
];

function isPathPublic(path: string) {
    return public_paths.some(allowedPath =>
        path === allowedPath || path.startsWith(allowedPath + '/')
    );
}

// Note that this function only checks if there is a JWT in the cookie.
// It does not check if the JWT is valid. This is handled by the API
export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, url } = event;
    const jwtToken = cookies.get('jwt');
    
    if (!isPathPublic(url.pathname)) {
        if (!jwtToken) {
            throw redirect(302, '/auth/login');
        }
    }

    return await resolve(event);
};