<script lang="ts">
    import type { LayoutData } from './$types';
    export let data: LayoutData;
    
    import LandningNav from "$lib/components/nav/LandingNav.svelte";
</script>

<LandningNav subsections={[
    {label: "Coop", href: "/docs/coop"}, 
    {label: "API Docs", href: "/docs/api"}, 
    {label: "Blog", href: "/docs/blog"},
    ]} 
/>

<slot />