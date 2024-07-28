<script lang="ts">
    import { formatDate } from '$lib/utils';
	import type { Post } from '$lib/types';
	export let data: { posts: Post[] };
</script>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={`/docs/blog/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		list-style: none;
		padding: 0;
	}
	.post {
		margin-bottom: 1rem;
	}
	.title {
		font-weight: bold;
		text-decoration: none;
		color: inherit;
	}
	.date {
		color: #888;
	}
	.description {
		margin: 0.5rem 0;
	}
</style>
