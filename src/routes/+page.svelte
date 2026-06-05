<script lang="ts">
  // Components
  import Sidebar from "$lib/components/Sidebar.svelte";

  // Types
  import type { Server } from '$lib/types';

  // State
  let userData: Server[] = $state([
    {name: "fpohkfgph", img: ""},
    {name: "fpohkfgph", img: "https://i.pinimg.com/736x/e3/76/41/e37641c127055e6221a0faf5437088ce.jpg"}  
  ]);
</script>
<main class="fixed inset-0 bg-body-600">
  <Sidebar serverList={userData}/>
</main>

