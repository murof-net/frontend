<script lang="ts">
	import * as Resizable from "$lib/components/ui/resizable/";
    import * as Tooltip from "$lib/components/ui/tooltip/";
    import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

    import Nav from "./nav.svelte";
</script>

<div class="h-screen">
    <Resizable.PaneGroup
    direction="horizontal"
    >

        <Nav />

        <Resizable.Handle />

        <Resizable.Pane defaultSize={80}>

            <Resizable.PaneGroup direction="vertical">
                <Resizable.Pane defaultSize={50}>
                    <div class="flex h-full items-center justify-center">
                        <span class="font-semibold">
                            Top
                        </span>
                    </div>
                </Resizable.Pane>

                <Resizable.Handle withHandle />

                <Resizable.Pane>
                    <div class="flex h-full items-center justify-center">
                        <span class="font-semibold">
                            Bottom
                        </span>
                    </div>
                </Resizable.Pane>
            </Resizable.PaneGroup>

        </Resizable.Pane>

    </Resizable.PaneGroup>
</div>