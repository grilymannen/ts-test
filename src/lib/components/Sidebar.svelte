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
  
  // Constants
  const directMessage: ServerType = {
    name: "Direct Messages",
    img: "",
  }
  const addServer: ServerType = {
    name: "Add Server",
    img: "",
  }
  const discoverServer: ServerType = {
    name: "Discover",
    img: "",
  }
  // State
  let selected: number = $state(1);
</script>

<nav class="flex flex-col w-16 h-full gap-4 items-center overflow-y-scroll scrollbar-none">
  <Server bind:selectedIdx={selected} idx={0} server={directMessage}/>
  <div class="w-10 h-px bg-body-500 rounded"></div>
  {#each serverList as server, i (i)}
    <Server bind:selectedIdx={selected} idx={i+1} server={server}/>
  {/each}
  <Server bind:selectedIdx={selected} idx={serverList.length + 1} server={addServer}/>
  <Server bind:selectedIdx={selected} idx={serverList.length + 2} server={discoverServer}/>
</nav>