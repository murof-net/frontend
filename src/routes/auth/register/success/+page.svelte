<script lang="ts">
    // import type { PageData } from './$types'
    // export let data: PageData;

    // UI components
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
    import { page } from '$app/stores';

    const email = $page.url.searchParams.get('email');
    const username = $page.url.searchParams.get('username');
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Success 🥳
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        Thank you for registering
        {#if username}<span class="font-robomo">{username}</span>{/if}!
    </CardDescription>
</CardHeader>
<CardContent>
    <div class="flex flex-col items-center justify-center text-center">
        <p>Please check your email to activate your account and get started.</p>
        {#if email}
            <span class="font-robomo my-2">{email}</span>
        {/if}
    </div>
</CardContent>
