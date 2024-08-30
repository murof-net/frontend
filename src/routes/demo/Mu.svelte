<script lang="ts">
  import { Handle, Position, NodeToolbar, type NodeProps } from '@xyflow/svelte';
  import type { Writable } from 'svelte/store';
  import { isValid } from 'zod';
 
  type $$Props = NodeProps;
    
 </script>

<style>
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<NodeToolbar isVisible={true}>
  <div class="w-5 h-5 rounded-full p-5 border-4 border-foreground bg-background hover:shadow-lg shadow-foreground circle">
    Hey
  </div>
</NodeToolbar>

<div class="w-12 h-12 rounded-full border-4 border-foreground bg-background hover:shadow-lg shadow-foreground circle">
  <Handle 
    type="source" 
    position={Position.Right} 
    class=" !bg-background border-1 border-foreground w-1 h-1"
  />
  Hello
</div>