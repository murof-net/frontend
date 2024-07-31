<script lang="ts">
    import type { PageData } from "./$types"
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { loginSchema } from "./auth-schemas";
    import { superForm } from "sveltekit-superforms/client"
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    
    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    // import AlternativeAuth from "$lib/components/sections/AlternativeAuth.svelte";
    import TermsAndPrivacy from "$lib/components/sections/TermsAndPrivacy.svelte";

    export let data: PageData;
    const { form, errors, enhance, constraints } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave this page? Changes may not be saved",
        validators: zod(loginSchema),
        });

    let isLoading = false;

</script>

<div class="w-full">
    <div class="md:py-12 flex justify-center items-center">
        <Card class="p-4 m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                Login
            </CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                    Enter your email and password to access your account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
                <!-- <div class="container">
                    <SuperDebug data={$form}/>
                </div> -->
                
                <form method="POST" use:enhance>
                    <p class="text-accent-foreground p-1 font-robomo">Email address</p>
                    <div class="grid gap-2 py-2">
                        <Input type="email" name="email" id="email" placeholder="email@example.com" 
                        bind:value={$form.email} {...$constraints.email}/>
                        {#if $errors.email}
                            <small class="text-destructive">{$errors.email}</small>
                        {/if}
                    </div>
                    <div class="grid gap-2 py-2">
                        <p class="text-accent-foreground p-1 font-robomo">Password</p>
                        <Input type="password" name="password" id="password" placeholder="Pa$$w0rd" 
                        bind:value={$form.password} {...$constraints.password}/>
                        {#if $errors.password}
                            <small class="text-destructive">{$errors.password}</small>
                        {/if}
                    </div>
                    <div class="my-1 pt-3 grid gap-5">
                        <div class="flex gap-4">
                            <a class="w-[50%]" href="/auth/register">
                                <Button class="w-full" variant="outline">Register instead</Button>
                            </a>
                            <Button type="submit" class="w-[50%]" variant="default" on:click={() => {isLoading = true}}>
                                {#if isLoading === true && $errors.email && $errors.password}
                                    <svg class="animate-spin h-5 w-5 mr-3 text-background" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span class="text-background">Logging in...</span>
                                {:else}
                                    <span class="text-background">Login to your account</span>
                                {/if}
                            </Button>
                        </div>
                    </div>
                </form>

                <!-- <AlternativeAuth /> -->

            </div>
        </CardContent>
        <CardFooter class="flex justify-center">
            <TermsAndPrivacy />
        </CardFooter>
        </Card>
    </div>
</div>
