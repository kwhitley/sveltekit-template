<script>
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import MenuIcon from './MenuIcon.svelte'
  import { headerIsOpen } from '~/stores'

  export let collapsible = true
</script>


<section>
  {#if true || $headerIsOpen}
    <nav transition:slide={{ duration: 200 }} class:open={$headerIsOpen}>
      <slot />
    </nav>
  {/if}
</section>

<!-- STYLES -->
<style lang="scss">
  section {
    flex: 1 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    // padding: 1.2rem 0;
    // position: relative;
    // overflow: hidden;
  }

  nav {
    display: flex;
    flex-flow: row wrap;
    font-size: 1.1rem;
    column-gap: 1.5em;
    row-gap: 0.6em;
    padding: 0.5em 0;
    align-items: center;
    justify-content: flex-end;
    flex-flow: column;
    align-items: flex-end;
    transition: all 0.3s ease-in-out;
    max-height: 300px;
    overflow: hidden;
    // outline: 2px solid red;

    &:not(.open) {
      max-height: 0;
      padding: 0;
    }
  }

  :global(header nav a) {
    color: var(--foreground-color);
  }

  div {
    cursor: pointer;
  }
</style>
