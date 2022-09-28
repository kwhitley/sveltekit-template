<script>
  export let constrained = false
  export let sticky = false
</script>

<!-- MARKUP -->
<footer class:sticky>
  <section class:constrained>
    <slot>
      Footer content goes here.
    </slot>
  </section>
</footer>

<!-- STYLES -->
<style lang="scss">
  footer {
    padding: 1.5em;
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: var(--foreground-50);
    background: var(--background-color);

    &.sticky {
      position: fixed;
      bottom: 0;
      width: 100%;
      border-top: 1px solid var(--foreground-25);
    }
  }

  section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: 2em;

    &.constrained {
      max-width: var(--max-page-width);
    }
  }
</style>
