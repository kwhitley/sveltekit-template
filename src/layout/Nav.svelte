<script>
  import Brand from './Brand.svelte'
  import Menu from './Menu.svelte'

  export let sticky = true
  export let confined = true
  export let version = false
</script>

<!-- MARKUP -->
<header class:sticky>
  <section class:confined>
    <Brand showVersion={version}>
      <slot name="brand">
        SvelteKit Template
      </slot>
    </Brand>

    <Menu>
      <slot />
    </Menu>
  </section>
</header>

<!-- STYLES -->
<style lang="scss">
  header {
    padding: 0.5em 1em;
    background-color: #fff;
    z-index: 1;
    display: flex;
    justify-content: center;

  }

  section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2em;

    &.confined {
      max-width: var(--max-page-width);
    }
  }

  .sticky {
    border-bottom: 1px solid #333;
    box-shadow: 0 0 1em rgba(0,0,0,0.2);
    top: 0;
    position: sticky;
  }
</style>
