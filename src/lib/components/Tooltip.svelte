<script lang="ts">
  // Svelte logic
  import { onMount } from "svelte";

  // Types
  import type { Snippet } from "svelte";
  
  interface Props {
    children?: Snippet;
  };

 

  // Props
  let { children }: Props = $props();

  // State
  let hovered: boolean = $state(false);
  let self: HTMLDivElement | undefined = $state();
  let parent = $derived(self?.parentElement)

  onMount(() => {
    if (!parent) {
      console.log("Failed to add event listeners")
      return;
    }

    const enter = () => hovered = true;
    const leave = () => hovered = false;

    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);

    return () => {
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave)
    }
  })

</script>

{#if hovered}
  <div class="bg-body-400 text-left border border-body-300 p-2 absolute rounded-lg" bind:this={self}>
    {@render children?.()}
  </div>
{:else}
  <div bind:this={self}></div> <!--NOTE: Need this line to derive parent for hover events-->
{/if}

