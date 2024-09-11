<script lang="ts">
    // import type { PageData } from './$types';
    import { writable } from 'svelte/store';
    import { SvelteFlow, Background, Controls, Panel, type ColorMode, type Node, type Edge } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    // export let data: PageData;
    import Mu from './Mu.svelte';
    import { mode } from 'mode-watcher';
    import Toolbelt from './Toolbelt.svelte';

    let colorMode: ColorMode
    // Subscribe to the mode store to get its current value
    $: {
        const unsubscribe = mode.subscribe(value => {
            colorMode = value || 'system'; // Default to 'system' if value is undefined
        });
    }

    // TODO: move nodes & stuff to ts file
    const nodeTypes = {
    'mu': Mu,
    };
    
    const nodes = writable<Node[]>([
        {
        id: 'mu', // required and needs to be a string
        type: 'mu',
        position: { x: 0, y: 0 }, // required
        data: { color: writable('#ff4000') } // required
        },
        {
        id: 'hello',
        position: { x: 100, y: 120 },
        data: { label: 'world' }
        },
    ]);

    const edges = writable<Edge[]>([
        { id: 'mu-hello', source: 'mu', target: 'hello', animated: true },
    ]);
</script>

<SvelteFlow 
    {nodeTypes} {nodes} {edges} 
    {colorMode} 
    class="bg-background"
    fitView autoPanOnNodeDrag={true} 
    maxZoom={2} minZoom={0.4}
    attributionPosition="hidden">
    <Background class="bg-background"/>
    <Panel 
    class="mb-0 mx-0"
    position="bottom-center">
        <Toolbelt />
    </Panel>
    <Controls showLock={true} position="top-right"/>

</SvelteFlow>