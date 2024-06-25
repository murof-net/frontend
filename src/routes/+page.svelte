<!-- <h1 class="font-robomo text-primary-800 mb-4 text-4xl font-bold lg:text-5xl italic"
>Murof heropage!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

	
<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    // import * as Card from "$lib/components/ui/card";
	  import * as Menubar from "$lib/components/ui/menubar";
    import { toggleMode } from "mode-watcher";

    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
</script>
 
<header class="sticky top-0 z-50 w-full p-3 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <Menubar.Root class="border-none bg-transparent">
    <div class="container flex max-w-6xl items-center p-1 md:p-8 lg:p-12">
    <Menubar.Menu>

      <div class="flex float-right justify-end w-full">
      <Menubar.Item>
        <Button on:click={toggleMode} variant="outline">
            <Sun
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
      </Menubar.Item>
      </div>

      <Menubar.Trigger class="p-0">
          <Button variant="default">
            Start now
          </Button>
      </Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item>Learn more</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Sign up</Menubar.Item>
        <Menubar.Item>Login</Menubar.Item>
      </Menubar.Content>

    </Menubar.Menu>
    </div>
  </Menubar.Root>
</header>

