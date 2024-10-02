<script lang="ts">
    // import type { PageData } from './$types'
    // export let data: PageData;

    // UI components
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
    import { page } from '$app/stores';

	import { onMount } from 'svelte';

	let message: string = 'Verifying your email...'; // Initial message
    let username: string | null = null;
	let email: string | null = null;
	let token: string | null = null;
    let error: boolean = false;

	// Extract token from the URL and call the verification API
	onMount(async () => {
		token = $page.url.searchParams.get('token');
		
		if (token) {
			try {
				const response = await fetch(`http://127.0.0.1:8000/auth/verify/${token}`);
				
				if (response.ok) {
					const data = await response.json();
                    username = data.username;
					email = data.email;
					message = "Welcome to Murof, " + username + "!";
				} else {
                    error = true;
                    if (response.status === 401) {
					message = "Invalid token. Please try again.";
				    } else if (response.status === 404) {
					message = "User not found. Please check your email.";
				    } else {
					message = "An unexpected error occurred. Please try again.";
				    }
                }
			} catch (error) {
                error = true;
				message = "Failed to reach the server. Please try again later.";
			}
		} else {
			message = "No token provided.";
		}
	});
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Activation ⚡
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        {#if error}
            <span class="text-destructive"> {message} </span>
        {:else}
            {message}
        {/if}
    </CardDescription>
</CardHeader>
<CardContent>
    <div class="text-center">
        {#if username}
            <Button class="mt-1 mb-2 w-full md:w-1/2" href="/auth/login?username={username}">Go to login</Button>
        {:else}
            <Button class="mt-1 mb-2 w-full md:w-1/2" href="/auth/login">Go to login</Button>
        {/if}
    </div>
</CardContent>