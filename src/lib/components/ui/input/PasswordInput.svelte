<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Eye, EyeOff } from 'lucide-svelte';
    import { cn } from "$lib/utils.js";
    import type { HTMLInputAttributes } from "svelte/elements";
  
    let className: HTMLInputAttributes["class"] = undefined;
    export let value: HTMLInputAttributes["value"] = undefined;
    export let readonly: HTMLInputAttributes["readonly"] = undefined;
  
    let showPassword = false;
  
    export { className as class };
</script>
  
<div class="relative w-full">
    <Input
        type={showPassword ? "text" : "password"}
        bind:value
        {readonly}
        class={cn("pr-10", className)}
        {...$$restProps}
    />
    <button
        type="button"
        class="absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground/45"
        on:click={() => showPassword = !showPassword}
        tabindex="-1"
    >
        {#if showPassword}
        <EyeOff class="h-4 w-4" />
        {:else}
        <Eye class="h-4 w-4" />
        {/if}
    </button>
</div>