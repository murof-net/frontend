import { handleAuth0Callback } from '$lib/auth0';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url, cookies }) => {
    const code = url.searchParams.get('code');

    if (code) {
        const { id_token } = await handleAuth0Callback(code);
        cookies.set('jwt', id_token, {
            path: '/',
            httpOnly: true,
        });

        throw redirect(302, '/app');
    }

    throw redirect(302, '/auth/login');
};