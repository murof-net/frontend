<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';
  import type { Writable } from 'svelte/store';
 
  type $$Props = NodeProps;
    
 </script>
  
<div class="rounded-full p-5 border-4 border-foreground bg-background hover:shadow-lg shadow-foreground">
  <Handle type="source" position={Position.Bottom} />
</div>