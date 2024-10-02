import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { SECRET_KEY, ALGORITHM } from '$env/static/private';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
    const { cookies, url } = event;
    const access_token = cookies.get('access_token');
    const refresh_token = cookies.get('refresh_token');

    if (url.pathname.startsWith('/app')) {
        if (!access_token || !refresh_token) {
            throw redirect(303, '/auth/login');
        }
        try {
            const tokenData = jwt.verify(access_token, SECRET_KEY, { algorithms: [ALGORITHM]});
            const username = tokenData.username;
            cookies.set('username', username, { path: '/', httpOnly: true, });
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                try {
                    const response = await fetch('http://127.0.0.1:8000/auth/token/refresh/${refresh_token}', {
                        method: 'GET',
                        headers: {
                            'accept': 'application/json',
                        },
                    });
                    if (!response.ok) {
                        throw redirect(303, '/auth/login');
                    }
                    const data = await response.json();
                    cookies.set('access_token', data.access_token, { path: '/', httpOnly: true, });
                } catch {
                    throw redirect(303, '/auth/login');
                }
            } else {
                throw redirect(303, '/auth/login');
            }
        }
        return await resolve(event);
    }
    return await resolve(event);
};