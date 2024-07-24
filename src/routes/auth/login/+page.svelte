<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    import LoginMdImage from "$lib/components/custom/LoginMdImage.svelte";
    import { enhance } from '$app/forms';

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

<header class="sticky top-0 z-50 w-full p-3 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <Menubar.Root class="border-none bg-transparent">
    <div class="container flex max-w-9xl items-center p-1">
      <Menubar.Menu>
        <div class="w-full flex justify-between md:float-right md:justify-end">
          <Menubar.Item>
            <Button on:click={toggleMode} variant="outline">
              <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
              <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
              <span class="sr-only">Toggle theme</span>
            </Button>
          </Menubar.Item>
          <Menubar.Item>
            <a href="/blog">
              <Button variant="outline">Learn more</Button>
            </a>
          </Menubar.Item>
          <Menubar.Item>
            <a href="/auth">
              <Button variant="default">Start now</Button>
            </a>
          </Menubar.Item>
        </div>
      </Menubar.Menu>
    </div>
  </Menubar.Root>
</header>


<div class="w-full lg:w-1/2 bg-background/60">
    <div class="flex justify-center items-start text-center">
        <Card class="p-4 m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2">Sign in</CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1">
                    Enter your details to access your account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
                <form method="POST" action="?" use:enhance={handleSubmit}>
                    <div class="grid gap-2 my-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                    </div>
                    <div class="grid gap-2 my-2">
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                        />
                    </div>
                    <Button type="submit" class="w-full my-1">
                        Continue with email
                    </Button>
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
