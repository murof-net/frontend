<script lang="ts">
    import * as Tooltip from "$lib/components/ui/tooltip/";
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    import type { ComponentType } from 'svelte';
    import type { Icon } from 'lucide-svelte';

    export let route: { title: string; icon: ComponentType<Icon>; active: boolean; disabled: boolean };
    export let isCollapsed: boolean;
</script>

{#if isCollapsed}
<Tooltip.Root openDelay={0}>
    <Tooltip.Trigger asChild let:builder>
        <Button
            href="#"
            builders={[builder]}
            variant="ghost"
            size="icon"
            class={cn(
                "size-9",
                {
                    "text-primary-500": route.active
                }
            )}
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
    class={cn("justify-start", {
        "text-primary-500": route.active
    })}
>
    <svelte:component this={route.icon} class="mr-2 size-4" aria-hidden="true" />
    {route.title}
</Button>
{/if}


