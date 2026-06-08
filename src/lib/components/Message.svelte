<script lang="ts">
  import { formatTime, formatTimeFull } from "@grilymannen/grily-utils";
  import type { Message } from "$lib/types";


  import Tooltip from "./Tooltip.svelte";
  interface Props {
    message: Message;
  }
  let { message = $bindable() }: Props = $props();
</script>

<div class="p-1 hover:bg-body-400 rounded flex items-center gap-2">
  <button class="size-10">
    <img src={message.user.img} alt={message.user.name + " Profile"} class="rounded-full border">
  </button>
  <div class="flex flex-col ">
    <div class="flex gap-2 items-center">
      <button class="hover:underline">{message.user.name}</button>
      <p class="text-sm text-body-200">
        {formatTime(message.sent)}
        <Tooltip>{formatTimeFull(message.sent)}</Tooltip>
      </p>
    </div>
    
    <p>{message.text}</p>
  </div>
</div>