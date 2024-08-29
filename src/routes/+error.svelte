<script lang="ts">
    import { page } from '$app/stores';
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
</script>
  
<div class="bg-gradient-to-br from-background to-accent/70 min-h-screen flex flex-col">
    <LandingNav subsections={[
        {label: "Home", href: "/"},
    ]} />

    <main class="flex-grow flex items-center justify-center py-16">
        <Card class="m-3 md:p-4 md:m-4 bg-background/80 w-full max-w-md shadow-lg text-center">
            <CardHeader>
                <CardTitle class="font-robomo text-3xl font-bold p-2">
                    Oops! Something went wrong 😔
                </CardTitle>
                <CardDescription class="text-balance text-muted-foreground p-1">
                    Error Code: <span class="text-accent-foreground">{$page.status} - {$page.error?.message}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="container">
                    Murof is still in early development, so you might encounter some bugs. If you think this is a mistake, please let us know.
                </div>
            </CardContent>
            <CardFooter class="flex justify-center">
                <Button href="/" class="mt-4">Go Back to Home</Button>
            </CardFooter>
        </Card>
    </main>

    <Footer />
</div>