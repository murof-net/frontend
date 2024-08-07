<script lang="ts">
    import { writable } from 'svelte/store';

    import { SvelteFlow, Background, Controls } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    
    // export let data: PageData;

    const nodes = writable([
        {
        id: '1', // required and needs to be a string
        position: { x: 0, y: 0 }, // required
        data: { label: 'hey' } // required
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
    <SvelteFlow {nodes} {edges} fitView>
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