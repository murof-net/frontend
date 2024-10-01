<script lang="ts">
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
    import { Card, CardFooter } from "$lib/components/ui/card";
    // import AlternativeAuth from "./AlternativeAuth.svelte";
    import TermsAndPrivacy from "./TermsAndPrivacy.svelte";
</script>

<div class="bg-gradient-to-br from-background to-accent/70">

    <LandingNav subsections={[
        {label: "API", href: "/docs/api"}, 
        {label: "Blog", href: "/docs/blog"},
        {label: "Coop", href: "/docs/coop"}, 
        ]} 
    />

    <div class="w-full">
        <div class="md:py-12 flex justify-center items-center">
            <Card class="p-4 m-4">
                <slot />
                <!-- <AlternativeAuth /> -->
                <CardFooter class="flex justify-center">
                    <TermsAndPrivacy />
                </CardFooter>
            </Card>
        </div>
    </div>

</div>

<Footer />