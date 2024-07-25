<script lang="ts">
    import { enhance } from '$app/forms';

    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"

    // import Google from "lucide-svelte/icons/google"; doesn't exist
    import Github from "lucide-svelte/icons/github";
    import Facebook from "lucide-svelte/icons/facebook";
    import Linkedin from "lucide-svelte/icons/linkedin";

    async function handleSubmit(event) {
        const formData = new FormData(event.target);
        const response = await fetch('/auth/signin', {
        method: 'POST',
        body: formData
        });
        if (response.ok) {
            // Handle successful login (redirect, display message, etc.)
            console.log('Login successful!');
        } else {
            // Handle login errors (display error messages)
            const errorData = await response.json();
            console.error('Login failed:', errorData);
        }
    }
</script>

<div class="flex justify-center items-center text-center">
    <Card class="p-4 m-4">
    <CardHeader>
        <CardTitle class="font-robomo text-3xl font-bold p-2">Registration</CardTitle>
        <CardDescription class="text-balance text-muted-foreground p-1">
            Enter your details to create your account. Alternatively, go to <a class="underline hover:text-primary" href="/auth/login">login</a> instead.
        </CardDescription>
    </CardHeader>
    <CardContent>
        <div class="grid gap-4">
            <form method="POST" action="?" use:enhance={handleSubmit}>
                <p class="mb-3 text-left">General information</p>
                <div class="grid md:grid-cols-2 gap-2 mb-4">
                    <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First name"
                        required
                    />
                    <Input
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Last name"
                        required
                    />
                </div>
                <div class="grid md:grid-cols-2 gap-2 mb-4">
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        required
                    />
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                    />
                </div>
                <p class="my-3 text-left">Password and confimation</p>
                <div class="grid md:grid-cols-2 gap-2 mb-4">
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm password"
                        required
                    />
                </div>
                <p class="my-3 text-left">Birthdate and language skills</p>
                <div class="grid md:grid-cols-2 gap-2 mb-4">
                    <Input
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        placeholder="Birth date"
                        required
                        class="text-muted-foreground"
                    />
                    <Input
                        id="languages"
                        name="languages"
                        type="text"
                        placeholder="Languages"
                        required
                    />
                </div>
                <Button type="submit" class="w-full my-1">
                    Register with email
                </Button>
            </form>
            <div class="relative my-1">
                <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t"></span>
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                    <span class="bg-background px-2 text-muted-foreground">
                        Or use
                    </span>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 my-1">
                <Button variant="outline" class="w-full">
                    <!-- <Google /> -->
                    Google
                </Button>
                <Button variant="outline" class="w-full">
                    <Github class="p-1 mx-1"/>
                    GitHub
                </Button>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <Button variant="outline" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    <Facebook class="p-1 mx-1"/>
                    Facebook
                </Button>
                <Button variant="outline" class="w-full">
                    <Linkedin class="p-1 mx-1"/>
                    LinkedIn
                </Button>
            </div>
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
