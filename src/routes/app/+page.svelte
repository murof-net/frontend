<script lang="ts">
    import Nav from './nav.svelte';
    import Inbox from 'lucide-svelte/icons/inbox';
    import Send from 'lucide-svelte/icons/send';
    import Trash2 from 'lucide-svelte/icons/trash-2';
  
    const routes = [
      { title: 'Inbox', icon: Inbox },
      { title: 'Sent', icon: Send },
      { title: 'Trash', icon: Trash2 },
    ];
  
    let isCollapsed = false;
  </script>
  
  <Nav {isCollapsed} {routes} />
  
  <button on:click={() => isCollapsed = !isCollapsed}>
    {#if isCollapsed}
      Expand
    {:else}
      Collapse
    {/if}
  </button>
  