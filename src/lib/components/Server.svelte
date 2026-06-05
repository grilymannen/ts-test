<script lang="ts">
  // Types
  import type { Server } from '$lib/types';

  interface Props  {
    selectedIdx: number;
    idx: number;
    server: Server;
  };
  
  // Props
  let { selectedIdx = $bindable(), idx, server }: Props = $props();

  // State
  let isSelected: boolean = $derived(selectedIdx === idx);
</script>
<button class={`flex justify-center items-center group rounded-lg cursor-pointer relative bg-body-500 hover:bg-discord-500 size-10 ${isSelected ? "" : ""}`} onclick={() => selectedIdx = idx}>
  {#if server.img}
    <img src={server.img} alt={server.name}>
  {/if}
  <!--
    base: size-2 opacity-0 -left-6
    unread: size-2 opacity-100 -left-4
    hovered: h-6 opacity-100 -left-4
    selected: h-full opacity-100 -left-4
  -->
  <div class={`
    absolute w-2 rounded bg-white -left-4
    transition-all
    ${isSelected 
        ? 'h-full opacity-100' 
        : 'h-0 opacity-0 group-hover:h-4 group-hover:opacity-100'}
  `}></div>
</button>