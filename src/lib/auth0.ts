import jwt from 'jsonwebtoken';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, JWT_SECRET_KEY, AUTH0_REDIRECT_URI, AUTH0_LOGOUT_REDIRECT_URI } from '$env/static/private';

const AUTH0_BASE_URL = `https://${AUTH0_DOMAIN}/`;

export function generateAuth0LoginUrl() {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: AUTH0_CLIENT_ID,
        redirect_uri: AUTH0_REDIRECT_URI,
        scope: 'openid profile email',
    });
    return `${AUTH0_BASE_URL}/authorize?${params.toString()}`;
}

export async function handleAuth0Callback(code: string) {
    const tokenResponse = await fetch(`${AUTH0_BASE_URL}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            grant_type: 'authorization_code',
            client_id: AUTH0_CLIENT_ID,
            client_secret: JWT_SECRET_KEY,
            code,
            redirect_uri: AUTH0_REDIRECT_URI,
        }),
    });

    const { access_token, id_token } = await tokenResponse.json();

    // Decode and verify the ID token
    const decoded = jwt.verify(id_token, JWT_SECRET_KEY);
    return { access_token, id_token, decoded };
}

export function validateJwt(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET_KEY);
    } catch (error) {
        return null;
    }
}

export function generateLogoutUrl() {
    const params = new URLSearchParams({
        client_id: AUTH0_CLIENT_ID,
        returnTo: AUTH0_LOGOUT_REDIRECT_URI,
    });
    return `${AUTH0_BASE_URL}/v2/logout?${params.toString()}`;
}