<script>
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import MenuIcon from './MenuIcon.svelte'

  export let collapsible = true
  export let open = false
</script>


<section>
  <MenuIcon bind:open={open} />

  {#if open}
    <nav transition:slide={{ duration: 200 }}>
      <slot />
    </nav>
  {/if}
</section>

<!-- STYLES -->
<style lang="scss">
  section {
    flex: 1 10em;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 1rem 0;
    overflow: hidden;
  }

  nav {
    display: flex;
    flex-flow: row wrap;
    column-gap: 1.5em;
    row-gap: 0.8em;
    padding: 0.5em 0;
    align-items: center;
    justify-content: flex-end;

    flex-flow: column;
    align-items: flex-end;
  }

  div {
    cursor: pointer;
  }
</style>
