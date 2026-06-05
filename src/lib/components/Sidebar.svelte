<script lang="ts">
  // Components
	import Server from "./Server.svelte";

  // Props
  let { serverList } = $props();
  
  // State
  let selected = $state(1);
</script>

<nav class="flex flex-col w-16 h-full gap-4 items-center">
  {#each serverList as server, i (i)}
    <Server bind:selectedIdx={selected} idx={i} server={server}/>
  {/each}
</nav>