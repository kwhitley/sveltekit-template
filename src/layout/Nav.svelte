<script>
  import { headerIsOpen } from '~/stores'
  import Brand from './Brand.svelte'
  import Menu from './Menu.svelte'
  import MenuIcon from './MenuIcon.svelte'

  export let sticky = false
  export let constrained = false
  export let version = false
</script>

<!-- MARKUP -->
<header class:sticky>
  <section class:constrained>
    <Brand showVersion={version}>
      <slot name="brand">
        SvelteKit Template
      </slot>
    </Brand>

    <MenuIcon bind:open={$headerIsOpen} />

    <Menu>
      <slot />
    </Menu>
  </section>
</header>

<!-- STYLES -->
<style lang="scss">
  header {
    padding: 0.5em 1em 0.5em;
    background-color: var(--header-color);
    z-index: 1;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(0.2em);
  }

  section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 2em;

    &.constrained {
      max-width: var(--max-page-width);
    }
  }

  .sticky {
    border-bottom: 1px solid var(--foreground-50);
    box-shadow: 0 0 1em rgba(0,0,0,0.2);
    top: 0;
    position: sticky;
  }
</style>
