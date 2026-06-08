<script lang="ts">

  import { formatTime } from "@grilymannen/grily-utils";

  // Components
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Message from "$lib/components/Message.svelte";

  // Types
  import type { Category, Channel, Message as MessageType, Server as ServerType, User } from '$lib/types';
	

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

  const user: User = {
    name: "grily",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frain-world-downpour-map.github.io%2Fresources%2Ficons%2FSaint_icon.png&f=1&nofb=1&ipt=4a1708f2ea4ba1b725556d35597fdb186d7a53c28905770712d1883911f06051"
  } 
  const message: MessageType = {text: "Hello, World!", sent: new Date("June 6, 2026, 21:34:00"), user: user};
  const channel: Channel = {name: "general", description: "This is my very fine channel I like to send messages to.", messages: [message]};
  const channel2: Channel = {name: "a", description: "", messages: []}
  const category: Category = {name: "Text Channels", channels: [channel, channel2]};
  const server: ServerType = {name: "New server", img: "https://i.pinimg.com/736x/e3/76/41/e37641c127055e6221a0faf5437088ce.jpg", categories: [category]};
  
  
  const categoryFallback: Category = {name: "Unable to load category", channels: []};
  const channelFallback: Channel = {name: "Unable to load channel", description: "", messages: []}
  
  // State
  
  let userServers: ServerType[] = $state([
    server
  ]);
  
  let sidebar = $derived([
    directMessage,
    ...userServers,
    addServer,
    discoverServer
  ]);

let mainIdx: number = $state(1);
let categoryIdx: number = $state(0);
let channelIdx: number = $state(0);

let activeMain: ServerType = $derived(sidebar[mainIdx]);

let categories: Category[] = $derived(activeMain.categories ?? [categoryFallback]);
let activeCategory: Category = $derived(categories[categoryIdx] ?? categoryFallback);

let channels: Channel[] = $derived(activeCategory.channels ?? [channelFallback]);
let activeChannel: Channel = $derived(channels[channelIdx] ?? channelFallback);

</script>
<div class="fixed inset-0 text-body-100 bg-body-600 grid grid-cols-[5rem_1fr] grid-rows-[2rem_1fr]">
  <div class="col-span-2"></div>
  <Sidebar serverList={sidebar} bind:select={mainIdx}/>
  <main class="border border-body-500 rounded-xl flex">
    <!--Sidebar (main)-->
    <nav class="min-w-46 max-w-88 h-full resize-x overflow-x-hidden overflow-y-scroll flex flex-col">
      <!--Server name-->
      <div class="border-b border-b-body-500 h-12 p-2 flex justify-between items-center">
        <p class="p-1 hover:bg-body-500 rounded">{activeMain.name}</p>
        <button class="p-1 hover:bg-body-500 rounded">+</button>
      </div>

      <!--TODO: Events / Boosts here-->

      <!--Categories / Channel navigation-->
      <div class="p-2">
        {#each categories as category, i (category)}
          <div>
            <button class="text-body-200">{category.name}</button>
            {#each category.channels as channel, j (channel)}
              <button class="p-1 hover:bg-body-500 w-full rounded" onclick={() => {categoryIdx = i; channelIdx = j;}}># {channel.name}</button>
            {/each}
          </div>
        {/each}
      </div>
    </nav>
    <!--Main-->
    <div class="bg-body-500 flex-auto h-full">
      <!--Main top bar-->
      <div class="border-b border-b-body-300 h-12 flex items-center p-3">
        <p>
          <span class="text-body-200 font-extrabold">#</span>
          {activeChannel.name} 
          <span class="text-body-200">{activeChannel.description ? "• " + activeChannel.description : ""}</span>
        </p>

      </div>
      <div class="p-2">
        {#each activeChannel.messages as message (message)}
          <Message message={message}/>
        {/each}
        <input class="bg-body-400 bottom-0 absolute w-full p-4 border border-body-300 text-body-200 rounded-lg outline-0 focus:outline-3 focus:outline-[#00b0f4]">
      </div>
      
    </div>
  </main>
</div>