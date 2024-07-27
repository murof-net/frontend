<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    import { Button } from "$lib/components/ui/button"
    import { toggleMode } from "mode-watcher";
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import Footer from "$lib/components/custom/Footer.svelte";
    import { Toaster } from "$lib/components/ui/sonner";

    const year = new Date().getFullYear();
</script>

<Toaster />

<div class="bg-accent min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 w-full p-3 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Menubar.Root class="border-none bg-transparent">
            <div class="container flex max-w-9xl items-center p-1">
                <Menubar.Menu>
                    <div class="w-full flex justify-between md:float-right md:justify-end">
                        <Menubar.Item>
                            <Button on:click={toggleMode} variant="outline">
                                <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                <span class="sr-only">Toggle theme</span>
                            </Button>
                        </Menubar.Item>
                        <Menubar.Item>
                            <a href="/docs">
                                <Button variant="outline">Learn more</Button>
                            </a>
                        </Menubar.Item>
                        <Menubar.Item>
                            <a href="/auth">
                                <Button variant="default">Start now</Button>
                            </a>
                        </Menubar.Item>
                    </div>
                </Menubar.Menu>
            </div>
        </Menubar.Root>
    </header>

    <div class="flex justify-center items-center flex-grow">
        <slot />
    </div>

    <Footer />
</div>