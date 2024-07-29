<script lang="ts">
    import type { PageData } from "./$types"
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { signupSchema } from "./auth-schemas";
    import { superForm } from "sveltekit-superforms/client"
    // import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    
    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import AlternativeAuth from "$lib/components/sections/AlternativeAuth.svelte";
    import TermsAndPrivacy from "$lib/components/sections/TermsAndPrivacy.svelte";


    export let data: PageData;
    const { form, errors, enhance, constraints } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave? Changes may not be saved",
        validators: zod(signupSchema),
        });
</script>

<div class="w-full">
    <div class="flex justify-center items-center">
        <Card class="p-4 m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                Sign up
            </CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                    Enter your email to sign up to our newsletter. 
                    Alternatively, go to 
                        <a class="underline hover:text-primary" href="/auth/register">registration</a>, 
                        <a class="underline hover:text-primary" href="/auth/login">login</a> 
                    or back to the <a class="underline hover:text-primary" href="/">homepage</a>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
            <!-- <div class="container">
                    <SuperDebug data={$form}/>
                </div> -->
                
                <form method="POST" use:enhance>
                    <label for="email" class="font-medium">Email address</label>
                    <Input type="email" name="email" id="email" placeholder="email@example.com"
                    bind:value={$form.email} {...$constraints.email}/>
                    {#if $errors.email}
                        <small class="text-red-500">{$errors.email}</small>
                    {/if}

                    <div class="my-1 pt-3 grid gap-5">
                        <Button type="submit" class="w-full">
                            Sign up to our newsletter
                        </Button>

                        <div class="flex gap-4">
                            <a class="w-[50%]" href={`/auth/login?email=${$form.email || ''}`}>
                            <Button class="w-full" variant="outline">Go to login</Button>
                            </a>
                            <a class="w-[50%]" href={`/auth/register?email=${$form.email || ''}`}>
                            <Button class="w-full" variant="outline">Go to Register</Button>
                            </a>
                        </div>
                    </div>
                </form>

                <div class="relative my-1">
                    <div class="absolute inset-0 flex items-center">
                        <span class="w-full border-t"></span>
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-background px-2 text-muted-foreground">
                            Or with
                        </span>
                    </div>
                </div>

                <AlternativeAuth />

            </div>
        </CardContent>
        <CardFooter class="flex justify-center">
            <TermsAndPrivacy />
        </CardFooter>
        </Card>
    </div>
</div>
