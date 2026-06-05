<script lang="ts">
  // Components
  import Sidebar from "$lib/components/Sidebar.svelte";

  // Types
  import type { Server } from '$lib/types';

  // State
  let userData: Server[] = $state([
    {name: "fpohkfgph", img: ""},
    {name: "fpohkfgph", img: ""}  
  ]);
</script>
<main class="fixed inset-0 bg-body-600">
  <Sidebar serverList={userData}/>
</main>

