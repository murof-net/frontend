<script lang="ts">
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { onMount } from 'svelte';

    let identifier = '';
    let loading = false;
    let error: string | null = null;
    let successMessage: string | null = null;
    let email: string | null = null;

    // Function to handle form submission
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        error = null;
        successMessage = null;
        loading = true;

        try {
            const response = await fetch(`/auth/reset`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ identifier })
            });

            if (response.ok) {
                const data = await response.json();
                successMessage = 'Password reset request successful.';
                email = data.email;
            } else {
                const errorData = await response.json();
                console.log(errorData);
                error = errorData.detail || 'Something went wrong. Please try again.';
            }
        } catch (err) {
            error = 'Network error. Please try again.';
        } finally {
            loading = false;
        }
    };
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Password Reset
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        Enter your identifier to request a password reset
    </CardDescription>
</CardHeader>
<CardContent>
    <form on:submit={handleSubmit}>
        <p class="text-accent-foreground p-1 font-robomo">Identifier</p>
        <div class="grid gap-2 py-2">
            <Input type="text" name="identifier" id="identifier" placeholder="Username or email" bind:value={identifier} required />
        </div>

        <div class="text-center">
            <Button type="submit" class="mt-6 mb-2 w-full md:w-1/2" variant="default" disabled={loading}>
                <span class="text-background">{loading ? 'Requesting...' : 'Request Password Reset'}</span>
            </Button>
        </div>
    </form>

    <div class="md:max-w-lg mx-auto">
        {#if successMessage}
            <p class="text-green-600 mt-4 text-center">{successMessage}</p>
            <p class="text-accent-foreground font-robomo text-center">{email}</p>
        {/if}

        {#if error}
            <p class="text-destructive mt-4 text-center">{error}</p>
        {/if}
    </div>
</CardContent>