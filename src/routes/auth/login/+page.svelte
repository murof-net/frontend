<script lang="ts">
    import type { PageData } from "./$types"
    import { page } from '$app/stores';
    // import { onMount } from 'svelte';
    // import { writable } from "svelte/store";
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { loginSchema } from "../auth-schemas";
    import { superForm } from "sveltekit-superforms/client"
    // import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    
    // UI components
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
    import { Input } from "$lib/components/ui/input";
    import PasswordInput from "$lib/components/ui/input/PasswordInput.svelte";
    import { Button } from "$lib/components/ui/button";

    export let data: PageData;
    const { form, errors, enhance, constraints, message } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave this page? Changes may not be saved",
        validators: zod(loginSchema),
        });
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Login
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        {#if $message}
            <span class="text-destructive">{$message}</span>
        {:else}
            Enter your identifier and password to access your account
        {/if}
    </CardDescription>
</CardHeader>
<CardContent>
    <!-- <div class="container">
        <SuperDebug data={$form}/>
    </div> -->
    
    <form method="POST" use:enhance>
        <p class="text-accent-foreground p-1 font-robomo">Identifier</p>
        <div class="grid gap-2 py-2">
            <Input type="username" name="username" id="username" placeholder="Username or email" required
            bind:value={$form.username} {...$constraints.username}/>
            {#if $errors.username}
                <div class="md:max-w-96">
                    <small class="text-destructive">{$errors.username}</small>
                </div>
            {/if}
        </div>

        <p class="text-accent-foreground p-1 font-robomo">Password</p>
        <div class="grid gap-2 pt-2 pb-3">
            <PasswordInput name="password" id="password" placeholder="Password" required
            bind:value={$form.password} {...$constraints.password} />
            {#if $errors.password}
                <div class="md:max-w-96">
                    <small class="text-destructive">
                        {$errors.password}
                    </small>
                </div>
            {/if}
        </div>

        <div class="my-1 pt-3 grid gap-5">
            <div class="flex gap-4">
                <a class="w-[50%]" href="/auth/register">
                    <Button class="w-full" variant="outline">Go to Register</Button>
                </a>
                <Button type="submit" class="w-[50%]" variant="default">
                    <span class="text-background">Login</span>
                </Button>
            </div>
        </div>
    </form>
    {#if $message}
        <div class="text-center pt-6 pb-2 text-destructive">
            Forgot your password? <a href="/auth/reset" class="underline underline-offset-2 hover:text-primary">Reset it</a>
        </div>
    {/if}
</CardContent>