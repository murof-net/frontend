<script lang="ts">
    // import type { PageData } from './$types';
    import { writable } from 'svelte/store';
    import { SvelteFlow, Background, Controls, Panel, type ColorMode, type Node, type Edge } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    // export let data: PageData;
    import Mu from './Mu.svelte';
    import { mode } from 'mode-watcher';
    import ToggleMode from '$lib/components/ToggleMode.svelte';

    import { initialNodes, initialEdges } from './nodes-and-edges';
    import CustomNode from './CustomNode.svelte';

    let colorMode: ColorMode
    // Subscribe to the mode store to get its current value
    $: {
        const unsubscribe = mode.subscribe(value => {
            colorMode = value || 'system'; // Default to 'system' if value is undefined
        });
    }

    // const nodes_extra = writable<Node[]>(initialNodes);
    // const edges_extra = writable<Edge[]>(initialEdges);

    // TODO: move nodes & stuff to ts file
    const nodeTypes = {
    'mu': Mu,
    'custom': CustomNode
    };
    
    const nodes = writable<Node[]>([
        {
        id: 'mu', // required and needs to be a string
        type: 'mu',
        position: { x: -100, y: 0 }, // required
        data: { color: writable('#ff4000') } // required
        },
        {
        id: 'hello',
        position: { x: -50, y: 120 },
        data: { label: 'world' }
        },
        {
        id: 'A',
        type: 'group',
        data: {},
        position: { x: 150, y: 0 },
        style: 'width: 170px; height: 140px;'
        },
        {
        id: 'A-1',
        type: 'input',
        data: { label: 'child 1' },
        position: { x: 10, y: 10 },
        parentId: 'A',
        extent: 'parent'
        },
        {
        id: 'A-2',
        data: { label: 'child 2' },
        position: { x: 10, y: 90 },
        parentId: 'A',
        extent: 'parent'
        },
        {
        id: 'B',
        type: 'output',
        position: { x: 50, y: 200 },
        data: { label: 'node b' }
        },
        {
        id: 'C',
        type: 'output',
        position: { x: 250, y: 200 },
        data: { label: 'node c' }
        }
    ]);

    const edges = writable<Edge[]>([
        { id: 'mu-hello', source: 'mu', target: 'hello', animated: true },
        { id: 'a1-a2', source: 'A-1', target: 'A-2' },
        { id: 'a2-b', source: 'A-2', target: 'B' },
        { id: 'a2-c', source: 'A-2', target: 'C' }
    ]);

    // // combine the extra nodes and edges with the initial ones
    // $: {
    //     const unsubscribe = nodes_extra.subscribe(value => {
    //         nodes.update(n => [...n, ...value]);
    //     });
    //     const unsubscribe2 = edges_extra.subscribe(value => {
    //         edges.update(e => [...e, ...value]);
    //     });
    // }

</script>


<SvelteFlow 
{nodeTypes} {nodes} {edges} 
{colorMode} 
class="bg-background"
fitView autoPanOnNodeDrag={true} 
maxZoom={2} minZoom={0.01}
attributionPosition="hidden">
    <!-- <Background 
    class="bg-background"/> -->
    <Panel position="top-left">
        <ToggleMode />
    </Panel>
    <Controls showLock={true} position="top-right"/>

</SvelteFlow>