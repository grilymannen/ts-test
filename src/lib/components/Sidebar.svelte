<script lang="ts">
  // Components
	import Server from "./Server.svelte";

  // Types
  import type { Server as ServerType } from '$lib/types'
  
  interface Props {
    serverList: ServerType[];
    select: number;
  }

  // Props
  let { serverList, select = $bindable() }: Props = $props();
  
  
  
</script>

<nav class="flex flex-col w-full h-full gap-4 items-center overflow-y-scroll scrollbar-none">

  <div class="w-10 h-px bg-body-500 rounded"></div>
  {#each serverList as server, i (i)}
    <Server bind:selectedIdx={select} idx={i} server={server}/>
  {/each}

</nav>