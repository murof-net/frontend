import type { PageServerLoad } from './$types';
import { getPost } from '$lib/server/posts';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	if (!post) {
		return {
			status: 404,
			error: new Error('Post not found')
		};
	}
	return { post };
};