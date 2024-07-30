<script lang="ts">
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";

</script>

<div class="bg-gradient-to-br from-background to-accent/70">

    <LandingNav subsections={[
        {label: "API", href: "/docs/api"}, 
        {label: "Blog", href: "/docs/blog"},
        {label: "Coop", href: "/docs/coop"}, 
        ]} 
    />

    <slot class="min-h-screen"/>

</div>

<Footer />