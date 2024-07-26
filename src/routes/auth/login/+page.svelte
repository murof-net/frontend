<script lang="ts">
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import AlternativeAuth from "$lib/components/custom/AlternativeAuth.svelte";

    import type { PageData } from "./$types.js";
    import LoginForm from "./login-form.svelte";
	import { page } from "$app/stores";

    let initialEmail = "";

    page.subscribe(newPage => {
        initialEmail = newPage.url.searchParams.get('email') || '';
    });
</script>

<div class="w-full">
    <div class="flex justify-center items-center">
        <Card class="p-4 m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">Login</CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                Enter your details to access your account. Alternatively, go to <a class="underline hover:text-primary" href="/auth/register">registration</a> or the <a class="underline hover:text-primary" href="/">homepage</a>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">

                <LoginForm initialEmail={initialEmail} />

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
            <p class="px-8 text-center text-sm text-muted-foreground">
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
