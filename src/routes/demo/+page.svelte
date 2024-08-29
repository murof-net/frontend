<script lang="ts">
    // import type { PageData } from './$types';
    import { writable } from 'svelte/store';
    import { SvelteFlow, Background, Controls, Panel, type ColorMode, type Node, type Edge } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    // export let data: PageData;
    import Mu from './Mu.svelte';
    import { mode } from 'mode-watcher';

    let colorMode: ColorMode
    // Subscribe to the mode store to get its current value
    $: {
        const unsubscribe = mode.subscribe(value => {
            colorMode = value || 'system'; // Default to 'system' if value is undefined
        });
    }

    // TODO: move nodes & stuff to ts file
    const nodeTypes = {
    'mu': Mu
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
        position: { x: -100, y: 120 },
        data: { label: 'Hello world' }
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

</script>


<SvelteFlow {nodeTypes} {nodes} {edges} {colorMode} fitView autoPanOnNodeDrag={true} attributionPosition="hidden">

    <Background />
    <Controls showLock={true} position="top-right"/>

</SvelteFlow>