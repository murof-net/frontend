<script lang="ts">
    import LandingNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
    
    import { Toaster } from "$lib/components/ui/sonner";
</script>

<Toaster />

<div class="bg-accent min-h-screen flex flex-col">
    
    <LandingNav subsections={[
        {label: "Coop", href: "/docs/coop"}, 
        {label: "API Docs", href: "/docs/api"}, 
        {label: "Blog", href: "/docs/blog"},
        ]} 
    />

    <div class="flex justify-center items-center flex-grow">
        
        <slot />
    </div>

    <Footer />
</div>