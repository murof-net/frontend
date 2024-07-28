<script lang="ts">
    import type { LayoutData } from './$types';
    // export let data: LayoutData;
    
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
</script>

<div class="bg-gradient-to-br from-background to-accent/70 min-h-screen flex flex-col">

    <LandingNav subsections={[
        {label: "API", href: "/docs/api"}, 
        {label: "Blog", href: "/docs/blog"},
        {label: "Coop", href: "/docs/coop"}, 
        ]} 
    />

    <slot />
</div>

<Footer />