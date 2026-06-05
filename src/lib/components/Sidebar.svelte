<script lang="ts">
  // Components
	import Server from "./Server.svelte";

  // Types
  import type { Server as ServerType } from '$lib/types'
  
  interface Props {
    serverList: ServerType[];
  }

  // Props
  let { serverList }: Props = $props();
  
  // State
  let selected: number = $state(1);
</script>

<nav class="flex flex-col w-16 h-full gap-4 items-center">
  {#each serverList as server, i (i)}
    <Server bind:selectedIdx={selected} idx={i} server={server}/>
  {/each}
</nav>