import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { AUTH0_DOMAIN, AUTH0_AUDIENCE } from '$env/static/private';

console.log('AUTH0_DOMAIN:', AUTH0_DOMAIN); // Add this line to debug

const client = jwksClient({
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
        if (err) {
            console.error('Error getting signing key:', err);
            callback(err);
            return;
        }
        const signingKey = key.getPublicKey();
        callback(null, signingKey);
    });
}

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, url } = event;
    const jwtToken = cookies.get('jwt');

    if (url.pathname.startsWith('/app')) {
        if (!jwtToken) {
            throw redirect(302, '/auth/login');
        }

        console.log('Verifying JWT:', jwtToken);

        try {
            const decodedToken = await new Promise<App.DecodedToken>((resolve, reject) => {
                jwt.verify(jwtToken, getKey, {
                    audience: AUTH0_AUDIENCE,
                    issuer: `https://${AUTH0_DOMAIN}/`,
                    algorithms: ['RS256']
                }, (err, decoded) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(decoded as App.DecodedToken);
                    }
                });
            });

            console.log('JWT verified:', decodedToken);

            event.locals.user = decodedToken;  // Pass the user info to the load functions

        } catch (err) {
            console.error('JWT verification failed:', err);
            throw redirect(302, '/auth/login');
        }
    }

    return await resolve(event);
};