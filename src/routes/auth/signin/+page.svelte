<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    
    import { toggleMode } from "mode-watcher";
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    // import Google from "lucide-svelte/icons/google"; doesn't exist
    import Github from "lucide-svelte/icons/github";
    import Facebook from "lucide-svelte/icons/facebook";
    import Linkedin from "lucide-svelte/icons/linkedin";
</script>

<div class="absolute top-2 right-1 p-1">
    <div class="flex float-left px-2">
        <Button on:click={toggleMode} variant="outline">
            <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
    <div class="flex float-right px-2">
        <Button variant="default">
            <a href="/auth/signup">
                Sign up
            </a>
        </Button>
    </div>
</div>

<div class="flex flex-col items-center justify-center h-screen bg-base-100 lg:flex-row bg-muted">
    <div class="bg-background hidden lg:block h-full order-1 w-full lg:w-1/2 p-0 m-0">
        <div class="relative z-20 flex items-center justify-center h-full bg-cover bg-center bg-no-repeat" style="background-image: url('/path/to/your/image.svg');">
            <a href="/" class="h-full">
                <img src="/logo-extended.svg" alt="logo" class="dark:invert object-contain h-full" />
            </a>
            <blockquote class="absolute left-0 bottom-0 space-y-2 p-6 bg-white bg-opacity-65">
                <p class="text-lg">“Learning has never felt more intuitive!”</p>
                <footer class="text-sm">Robbe</footer>
            </blockquote>
        </div>
    </div>
    <div class="order-2 w-full lg:w-1/2">
        <div class="flex justify-center items-start text-center">
            <Card class="p-4">
                <CardHeader>
                    <CardTitle class="font-robomo text-3xl font-bold p-2">Sign in</CardTitle>
                    <CardDescription class="text-balance text-muted-foreground p-1">
                        Enter your details to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Input
                            id="email"
                            type="email"
                            placeholder="first.last@example.com"
                            required
                        />
                    </div>
                    <div class="grid gap-2">
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    <Button class="w-full my-1">
                        Sign in with email
                    </Button>
                    <div class="relative my-1">
                        <div class="absolute inset-0 flex items-center">
                            <span class="w-full border-t"></span>
                        </div>
                        <div class="relative flex justify-center text-xs uppercase">
                            <span class="bg-background px-2 text-muted-foreground">
                                Or continue with
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
</div>
</div>
