import { error, json } from '@sveltejs/kit';

export const POST = async ({ request }: { request: Request }) => {
    const { identifier } = await request.json();

    try {
        const response = await fetch(`http://127.0.0.1:8000/auth/reset/request/${identifier}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw error(response.status, errorData.detail || 'Something went wrong');
        }

        const data = await res.json();
        return json(data);
    } catch (err: any) {
        throw error(500, err.message || 'Internal Server Error');
    }
};