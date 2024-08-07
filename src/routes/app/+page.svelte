<script lang="ts">
    import { writable } from 'svelte/store';

    import { SvelteFlow, Background, Controls } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';

    import Mu from './Mu.svelte';
    const nodeTypes = {
        'mu': Mu
    };
    
    // export let data: PageData;

    const nodes = writable([
        {
        id: '1', // required and needs to be a string
        type: 'mu',
        position: { x: 0, y: 0 }, // required
        data: { color: writable('#ff4000') } // required
        },
        {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'world' }
        }
    ]);

    const edges = writable([{ id: '1-2', source: '1', target: '2' }]);

</script>

<main>
    <SvelteFlow {nodeTypes} {nodes} {edges} fitView>
        <!-- Tailwind variable colors don't work yet... -->
      <Background bgColor="--background" patternColor="accent-foreground" />
      <Controls showLock={false} />
    </SvelteFlow>
  </main>
  
<style>
    main {
        height: 100vh;
    }
</style>