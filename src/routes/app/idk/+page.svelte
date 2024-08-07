<script lang="ts">
    import Nav from './Nav.svelte';
    import MainContent from './MainContent.svelte';
    import { SquareChevronRight, SquareChevronLeft } from 'lucide-svelte';
    import { primaryRoutes, secondaryRoutes } from './iconRoutes';

    import * as Resizable from "$lib/components/ui/resizable/";
    import { Separator } from "$lib/components/ui/separator";

    import { cn } from '$lib/utils';

    let defaultCollapsed = true;
    let navCollapsedSize = 4;
    let isCollapsed = defaultCollapsed;

	function onLayoutChange(sizes: number[]) {
		// document.cookie = `PaneForge:layout=${JSON.stringify(sizes)}`;
        
	}

	function onCollapse() {
		isCollapsed = true;
		// document.cookie = `PaneForge:collapsed=${true}`;
	}

	function onExpand() {
		isCollapsed = false;
		// document.cookie = `PaneForge:collapsed=${false}`;
	}
</script>

<div class="h-screen">
    <Resizable.PaneGroup 
    direction="horizontal" 
    {onLayoutChange}
    class="items-stretch">

		<Resizable.Pane
			defaultSize={15}
			collapsedSize={navCollapsedSize}
			collapsible
			minSize={15}
			maxSize={15}
			{onCollapse}
			{onExpand}
		>
			<div
				class={cn(
					"flex h-[52px] items-center justify-center",
					isCollapsed ? "h-[52px]" : "px-2"
				)}
			>
				icon
			</div>
			<Separator />
			<Nav {isCollapsed} routes={primaryRoutes} />
			<Separator />
			<Nav {isCollapsed} routes={secondaryRoutes} />
		</Resizable.Pane>
		<Resizable.Handle withHandle />

        <Resizable.Pane defaultSize={80}>
            <MainContent />
        </Resizable.Pane>
    </Resizable.PaneGroup>
</div>