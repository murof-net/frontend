<script lang="ts">
    import LandningNav from "$lib/components/nav/LandingNav.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";

    import { Toaster } from "$lib/components/ui/sonner";

    const year = new Date().getFullYear();
</script>

<Toaster />

<div class="bg-accent min-h-screen flex flex-col">
    
    <LandningNav />

    <div class="flex justify-center items-center flex-grow">
        <slot />
    </div>

    <Footer />
</div>