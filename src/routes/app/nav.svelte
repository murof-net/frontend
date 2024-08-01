<script lang="ts">
    import * as Resizable from "$lib/components/ui/resizable/";
    import * as Tooltip from "$lib/components/ui/tooltip/";
    import { Button } from "$lib/components/ui/button";
    import { Separator } from "$lib/components/ui/separator";

    import { SquareChevronRight } from 'lucide-svelte';
    import { GraduationCap } from 'lucide-svelte';
    import { NotebookPen } from 'lucide-svelte';
    import { LayoutDashboard } from 'lucide-svelte';
    import { MessagesSquare } from 'lucide-svelte';
    import { School } from 'lucide-svelte';
    import { Calendar } from 'lucide-svelte';
    import { GitFork } from 'lucide-svelte';
    import { CircleUserRound } from 'lucide-svelte';
    import { Blocks } from 'lucide-svelte';
    import { Settings } from 'lucide-svelte';


    export let routes: { title: string; icon: ComponentType<Icon>; }[] = [
        { title: 'Learning', icon: GraduationCap },
        { title: 'Dashboard', icon: LayoutDashboard },
        { title: 'Notebook', icon: NotebookPen },
        { title: 'Messages', icon: MessagesSquare },
        { title: 'Classroom', icon: School },
        { title: 'Calendar', icon: Calendar },
        { title: 'Knowledge graph', icon: GitFork },
        { title: 'Extensions', icon: Blocks },
    ];
    export let routesBot: { title: string; icon: ComponentType<Icon>; }[] = [
        { title: 'Settings', icon: Settings },
        { title: 'Profile', icon: CircleUserRound },
    ]
</script>

<Resizable.Pane 
defaultSize={2.5}
collapsible
minSize={2.5}
maxSize={8}
>
    <div class="flex h-full flex-col items-center">

        <div class="my-0.5">
            <Button 
            variant="ghost" 
            size="icon" 
            class="size-12 py-2 my-0.5">
                <svelte:component this={SquareChevronRight} class="size-6" aria-hidden="true" />
                <span class="sr-only">Extend</span>
            </Button>
        </div>

        <Separator />

        <nav class="h-full flex flex-col justify-between">
        <div class="group flex flex-col h-full items-center my-0.5 top-0">
        {#each routes as route}
            <Tooltip.Root openDelay={0}>
                <Tooltip.Trigger asChild let:builder>
                    <Button
                    builders={[builder]}
                    variant="ghost"
                    size="icon"
                    class="size-12 py-2 my-0.5"
                    >
                    <svelte:component this={route.icon} class="size-6" aria-hidden="true" />
                    <span class="sr-only">{route.title}</span>
                    </Button>
                </Tooltip.Trigger>
                <Tooltip.Content side="right" class="flex items-center gap-4">
                    {route.title}
                </Tooltip.Content>
            </Tooltip.Root>
        {/each}
        </div>

        <div class="group flex flex-col items-center my-0.5 bottom-0">
        {#each routesBot as route}
            <Tooltip.Root openDelay={0}>
                <Tooltip.Trigger asChild let:builder>
                    <Button
                    builders={[builder]}
                    variant="ghost"
                    size="icon"
                    class="size-12 py-2 my-0.5"
                    >
                    <svelte:component this={route.icon} class="size-6" aria-hidden="true" />
                    <span class="sr-only">{route.title}</span>
                    </Button>
                </Tooltip.Trigger>
                <Tooltip.Content side="right" class="flex items-center gap-4">
                    {route.title}
                </Tooltip.Content>
            </Tooltip.Root>
        {/each}
        </div>
        </nav>
    </div>
</Resizable.Pane>
