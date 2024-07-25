<script lang="ts">
    import { enhance } from '$app/forms';

    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import AlternativeAuth from "$lib/components/custom/AlternativeAuth.svelte";

    import type { PageData } from "./$types.js";
    import AuthForm from "./auth-form.svelte"
    export let data: PageData;

    // async function handleSubmit(event) {
    //     const formData = new FormData(event.target);
    //     const response = await fetch('/auth/signin', {
    //     method: 'POST',
    //     body: formData
    //     });
    //     if (response.ok) {
    //         // Handle successful login (redirect, display message, etc.)
    //         console.log('Login successful!');
    //     } else {
    //         // Handle login errors (display error messages)
    //         const errorData = await response.json();
    //         console.error('Login failed:', errorData);
    //     }
    // }
</script>

<div class="w-full">
    <div class="flex justify-center items-center">
        <Card class="p-4 m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">Authentication</CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                    Enter your details to access your account. Alternatively, go to <a class="underline hover:text-primary" href="/auth/register">registration</a>, <a class="underline hover:text-primary" href="/auth/login">login</a> or the <a class="underline hover:text-primary" href="/">homepage</a>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
                
                <AuthForm data={data.form} />

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
        <CardFooter>
            <p class="px-8 text-center text-sm text-muted-foreground text-center">
                By clicking continue, you agree to our 
                <a class="underline underline-offset-4 hover:text-primary" href="/terms">
                    Terms of Service
                </a> and 
                <a class="underline underline-offset-4 hover:text-primary" href="/privacy">
                    Privacy Policy
                </a>.
            </p>
        </CardFooter>
        </Card>
    </div>
</div>
