// import { redirect } from "@sveltejs/kit";
// import type { Handle } from "@sveltejs/kit";

// // Note that this function only checks if there is a JWT in the cookie.
// // It does not check if the JWT is valid. This is handled by the API
// export const handle: Handle = async ({ event, resolve }) => {
//     const { cookies, url } = event;
//     const jwtToken = cookies.get('jwt');
//     // console.log(url.pathname);

//     if (url.pathname.startsWith('/app')) {
//         if (!jwtToken || jwtToken === undefined) {
//             throw redirect(302, '/auth/login');
//         }
//     }

//     return await resolve(event);
// };

import { validateJwt } from '$lib/auth0';
import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, url } = event;
    const jwtToken = cookies.get('jwt');

    if (url.pathname.startsWith('/app')) {
        const user = jwtToken ? validateJwt(jwtToken) : null;
        if (!user) {
            throw redirect(302, '/auth/login');
        }
        event.locals.user = user;  // Pass the user info to the load functions
    }
    return await resolve(event);
};


// import type { Handle } from '@sveltejs/kit';
// import Auth0Provider from "@auth/core/providers/auth0";
// import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
// import { JWT_SECRET_KEY, AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } from '$env/static/private';

// const { handle: getAuthConfig } = SvelteKitAuth(async (event) => {
//     const config: SvelteKitAuthConfig = {
//     providers: [
//         Auth0Provider({
//         id: 'auth0',
//         name: 'Auth0',
//         clientId: AUTH0_CLIENT_ID,
//         clientSecret: AUTH0_CLIENT_SECRET,
//         issuer: `https://${AUTH0_DOMAIN}/`,
//         // wellKnown: WELL_KNOWN
//         }) as Provider
//     ],
//     secret: JWT_SECRET_KEY,
//     session: {
//         strategy: 'jwt',
//         maxAge: 3600 
//     },
//     trustHost: true,
//     debug: true,
//     logger: {
//         error: async (error: any) => {
//         console.log('Error trace from SvelteKitAuth:', error);
//         }
//     }
//     };
//     return config;
// });

// export const handle = getAuthConfig;
