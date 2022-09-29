<script>
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import MenuIcon from './MenuIcon.svelte'
  import { headerIsOpen } from '~/stores'

  export let horizontal = true
</script>


<section>
  {#if true || $headerIsOpen}
    <nav transition:slide={{ duration: 200 }} class:open={$headerIsOpen} class:horizontal>
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
    font-size: 1.1rem;
    column-gap: 1.5em;
    row-gap: 0.6em;
    align-items: center;
    justify-content: flex-end;
    flex-flow: column;
    align-items: flex-end;
    transition: all 0.2s ease-in-out;
    max-height: 400px;
    overflow: hidden;

    &.horizontal {
      flex-flow: row wrap;
      row-gap: 0.8em;
      max-height: 70px;
    }
    // outline: 2px solid red;

    &:not(.open) {
      max-height: 0;
      padding: 0;
    }
  }

  :global(header nav a) {
    color: var(--foreground-color);
    text-decoration: none !important;

    &:hover:not(.active) {
      opacity: 0.7;
    }
  }

  :global(header nav a.active) {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
    margin-bottom: -2px;
    text-decoration: none;

    cursor: default;
    pointer-events: none;
  }

  div {
    cursor: pointer;
  }
</style>
