<script>
  export let confined = false
  export let sticky = false
</script>

<!-- MARKUP -->
<footer class:sticky>
  <section class:confined>
    <slot>
      Footer content goes here.
    </slot>
  </section>
</footer>

<!-- STYLES -->
<style lang="scss">
  footer {
    padding: 1.5em;
    border-top: 1px solid var(--foreground-5);
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: var(--foreground-25);
    background: var(--background-color);

    &.sticky {
      position: sticky;
      bottom: -1px;
    }
  }

  section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: 2em;

    &.confined {
      max-width: var(--max-page-width);
    }
  }
</style>
