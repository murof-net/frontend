<script lang="ts">
    import type { PageData } from "./$types"
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { registerSchema } from "../auth-schemas";
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
        validators: zod(registerSchema),
        });
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Register
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        {#if $message}
            <span class="text-destructive">{$message}</span>
        {:else}
            Enter your details to create an account
        {/if}
    </CardDescription>
</CardHeader>
<CardContent>
    <!-- <div class="container">
        <SuperDebug data={$form}/>
    </div> -->
    
    <form method="POST" use:enhance>
        <div class="pb-2">
            <p class="text-accent-foreground p-1 font-robomo">Identification</p>
            
            <div class="grid gap-2 py-2">
                <Input type="text" name="username" id="username" placeholder="Username" required
                bind:value={$form.username} {...$constraints.username}/>
                {#if $errors.username}
                    <div class="md:max-w-96">
                        <small class="text-destructive">{$errors.username}</small>
                    </div>
                {/if}
            </div>

            <div class="grid md:grid-cols-2 gap-2">
                <div>
                    <Input type="email" name="email" id="email" placeholder="email@example.com" required
                    bind:value={$form.email} {...$constraints.email}/>
                    {#if $errors.email}
                        <div class="md:max-w-56">
                            <small class="text-destructive">
                                {$errors.email}
                            </small>
                        </div>
                    {/if}
                </div>
                <div>
                    <Input type="email" name="emailConfirm" id="emailConfirm" placeholder="Email confirmation" required
                    bind:value={$form.emailConfirm} {...$constraints.emailConfirm}/>
                    {#if $errors.emailConfirm}
                        <div class="md:max-w-56">
                            <small class="text-destructive">
                                {$errors.emailConfirm}
                            </small>
                        </div>
                    {/if}
                </div>
            </div>
        </div>

        <div class="py-2">
            <p class="text-accent-foreground p-1 font-robomo">Password and confirmation</p>
            <div class="grid md:grid-cols-2 gap-2 py-2">
                <div>
                    <PasswordInput name="password" id="password" placeholder="Password" required
                    bind:value={$form.password} {...$constraints.password} />
                    {#if $errors.password}
                        <div class="md:max-w-56">
                            <small class="text-destructive">
                                {$errors.password}
                            </small>
                        </div>
                    {/if}
                </div>
                <div>
                    <PasswordInput name="passwordConfirm" id="passwordConfirm" placeholder="Password confirmation" required
                    bind:value={$form.passwordConfirm} {...$constraints.passwordConfirm}/>
                    {#if $errors.passwordConfirm}
                        <div class="md:max-w-56">
                            <small class="text-destructive">
                                {$errors.passwordConfirm}
                            </small>
                        </div>                    
                    {/if}
                </div>
            </div>
        </div>

        <div class="my-1 pt-3 grid gap-5">
            <div class="flex gap-4">
                <Button type="submit" class="w-[50%]">
                    Register
                </Button>
                <a class="w-[50%]" href="/auth/login">
                <Button class="w-full" variant="outline">Go to login</Button>
                </a>
            </div>
        </div>
    </form>

</CardContent>