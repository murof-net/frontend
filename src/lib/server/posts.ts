import { parse } from 'path';
import type { Post } from '$lib/types';

type GlobEntry = {
	metadata: Post;
	default: unknown;
};

/**
 * Fetch all posts from the /src/lib/posts directory, parse metadata,
 * generate slugs, and sort by date.
 */
export async function getPosts(): Promise<Post[]> {
	const posts = Object.entries(
		import.meta.glob<GlobEntry>('/src/lib/posts/*.md', { eager: true })
	)
	.map(([filepath, globEntry]) => ({
		...globEntry.metadata,
		slug: parse(filepath).name,
	}))
	.filter(post => post.published)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
}

/**
 * Fetch a single post based on its slug.
 * @param slug The slug of the post to fetch.
 */
export async function getPost(slug: string): Promise<Post | null> {
	const posts = await getPosts();
	return posts.find(post => post.slug === slug) || null;
}