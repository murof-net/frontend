<script lang="ts">
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
    import { Toaster } from "$lib/components/ui/sonner";
</script>

<div class="bg-gradient-to-br from-background to-accent/70">

    <LandingNav subsections={[
        {label: "API", href: "/docs/api"}, 
        {label: "Blog", href: "/docs/blog"},
        {label: "Coop", href: "/docs/coop"}, 
        ]} 
    />

    <Toaster />

    <slot />

</div>

<Footer />