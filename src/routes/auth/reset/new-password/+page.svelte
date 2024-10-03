<script lang="ts">
    import type { PageData } from "./$types"
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { newPasswordSchema } from "../../auth-schemas";
    import { superForm } from "sveltekit-superforms/client"
    // import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    
    // UI components
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
    import PasswordInput from "$lib/components/ui/input/PasswordInput.svelte";
    import { Button } from "$lib/components/ui/button";

    export let data: PageData;
    const { form, errors, enhance, constraints, message } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave this page? Changes may not be saved",
        validators: zod(newPasswordSchema),
        });

    let loading = false;
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        New Password
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        Enter your new password
    </CardDescription>
</CardHeader>
<CardContent>
    <form method="POST" use:enhance>
        <div class="pt-2">
            <p class="text-accent-foreground p-1 font-robomo">Password and confirmation</p>
            <div class="grid gap-3 py-2">
                <div>
                    <PasswordInput name="password" id="password" placeholder="Password" required
                    bind:value={$form.password} {...$constraints.password} />
                    {#if $errors.password}
                        <div class="md:max-w-56">
                            <small class="text-danger">
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
                            <small class="text-danger">
                                {$errors.passwordConfirm}
                            </small>
                        </div>                    
                    {/if}
                </div>
            </div>
        </div>

        <div class="text-center">
            <Button type="submit" class="mt-6 mb-2 w-full md:w-1/2" variant="default" disabled={loading}>
                <span class="text-background">{loading ? 'Requesting...' : 'Request Password Reset'}</span>
            </Button>
        </div>
    </form>

    <div class="md:max-w-lg mx-auto">
        <!-- {#if successMessage} -->
            <p class="text-success my-4 text-center">successMessage</p>
        <!-- {/if} -->

        <!-- {#if errorMessage} -->
            <p class="text-danger my-4 text-center">errorMessage</p>
            <p class="text-accent-foreground font-robomo text-center">Could not send email</p>
        <!-- {/if} -->
    </div>
</CardContent>