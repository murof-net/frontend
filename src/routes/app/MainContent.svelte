<script lang="ts">
    import * as Resizable from "$lib/components/ui/resizable/";
</script>

<Resizable.PaneGroup direction="vertical">
    <Resizable.Pane defaultSize={50}>
        <div class="flex h-full items-center justify-center">
            <span class="font-semibold">Top</span>
        </div>
    </Resizable.Pane>

    <Resizable.Handle withHandle />

    <Resizable.Pane>
        <div class="flex h-full items-center justify-center">
            <span class="font-semibold">Bottom</span>
        </div>
    </Resizable.Pane>
</Resizable.PaneGroup>
