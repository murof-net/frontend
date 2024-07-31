<script lang="ts">
    import type { ComponentType } from 'svelte';
    import { Icon } from 'lucide-svelte';
    import { Button } from '$lib/components/ui/button';
    import * as Tooltip from '$lib/components/ui/tooltip';
  
    export let isCollapsed: boolean;
    export let routes: { title: string; icon: ComponentType<Icon>; }[];
</script>
  
<div data-collapsed={isCollapsed} class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
<nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 w-[74px]">
    {#each routes as route}
    {#if isCollapsed}
        <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger asChild let:builder>
            <Button
            href="#"
            builders={[builder]}
            variant="ghost"
            size="icon"
            class="size-9"
            >
            <svelte:component this={route.icon} class="size-4" aria-hidden="true" />
            <span class="sr-only">{route.title}</span>
            </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" class="flex items-center gap-4">
            {route.title}
        </Tooltip.Content>
        </Tooltip.Root>
    {:else}
        <Button
        href="#"
        variant="ghost"
        size="sm"
        class="justify-start"
        >
        <svelte:component this={route.icon} class="mr-2 size-4" aria-hidden="true" />
        {route.title}
        </Button>
    {/if}
    {/each}
</nav>
</div>
  