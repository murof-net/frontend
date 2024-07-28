<script lang="ts">
    import type { PageData } from './$types';
    import { formatDate } from '$lib/utils';
	export let data: { post: Post };
</script>

<article>
	<hgroup>
		<h1>{data.post.title}</h1>
		<p>Published at {formatDate(data.post.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.post.categories as category}
			<span class="surface-4">#{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.post.content} />
	</div>
</article>

<style>
	hgroup {
		margin-bottom: 1rem;
	}
	.tags {
		margin-bottom: 1rem;
	}
	.prose {
		margin-top: 2rem;
	}
</style>