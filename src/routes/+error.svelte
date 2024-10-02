<script lang="ts">
    import { page } from '$app/stores';
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
</script>
  
<div class="bg-gradient-to-br from-background to-accent/70">
    <LandingNav subsections={[
        {label: "Home", href: "/"},
    ]} />

    <main class="py-1 md:py-12 flex justify-center items-center">
        <Card class="p-0 md:p-4 m-4 shadow-md">
            <CardHeader>
                <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                    Oops! Something went wrong 😔
                </CardTitle>
                <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                    Error Code: <span class="text-accent-foreground">{$page.status} - {$page.error?.message}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="text-center md:max-w-md mx-auto">
                    Murof is still in early development, so you might encounter some bugs.
                    If you think this is a mistake, please let us know.
                </div>
            </CardContent>
            <CardFooter class="flex justify-center">
                <Button href="/" class="mt-1 mb-2 w-full md:w-1/2">Go Back to Home</Button>
            </CardFooter>
        </Card>
    </main>

    <Footer />
</div>