<script lang="ts">
    import type { LayoutData } from './$types';
    // export let data: LayoutData;
    
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
</script>

<LandingNav subsections={[
    {label: "Coop", href: "/docs/coop"}, 
    {label: "API docs", href: "/docs/api"}, 
    {label: "Blog", href: "/docs/blog"},
    ]} 
/>

<slot />

<Footer />