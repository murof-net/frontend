<script lang="ts">
  import ToggleMode from "../ToggleMode.svelte";
  import Logo from "$lib/components/nav/Logo.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Menubar from "$lib/components/ui/menubar";

  export let subsections: { label: string, href: string }[] = [];
</script>

<header class="sticky top-0 z-50 w-full p-1 md:p-3 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
  <Menubar.Root class="border-none bg-transparent pl-0">
    <div class="container flex max-w-9xl items-center p-1">
      <Menubar.Menu>

        {#each subsections as section}
          <Menubar.Item class="hidden text-foreground/70 transition-colors hover:text-foreground/85 md:block pr-8">
            <a href={section.href}>
              <span style="white-space: nowrap;">{section.label}</span>
            </a>
          </Menubar.Item>
        {/each}

        <div class="w-full flex justify-between md:float-right md:justify-end">

          <Menubar.Item class="px-0 md:px-2">
            <ToggleMode />
          </Menubar.Item>
          
          <Menubar.Item class="px-0 md:px-2">
            <Logo />
          </Menubar.Item>

          <Menubar.Item class="px-0 md:px-2">
            <a href="/docs">
              <Button variant="outline">Learn more</Button>
            </a>
          </Menubar.Item>

          <Menubar.Item class="px-0 md:pl-2">
            <a href="/auth">
              <Button variant="default">Start now</Button>
            </a>
          </Menubar.Item>

        </div>
      </Menubar.Menu>
    </div>
  </Menubar.Root>
</header>
