import type { PageServerLoad, Actions } from './$types';
import type { RequestEvent } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }: RequestEvent) => {
        const formData = await request.formData();
        const identifier = formData.get('identifier');

        const response = await fetch(`http://127.0.0.1:8000/auth/reset/request/${identifier}`);

        if (response.ok) {
            const data = await response.json();
        } else {
            const data = await response.json();
        }
    }
    
};