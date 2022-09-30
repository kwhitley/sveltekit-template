<script>
  export let active = false
</script>

<!-- MARKUP -->
<div class="card" class:active>
  <slot />
</div>

<!-- STYLES -->
<style lang="scss">
  :root {
    --card-font-size: 0.85rem;
    --active-color: var(--card-active-color);
  }

  .card {
    border: var(--card-border-thickness) solid var(--foreground-25);
    border-radius: var(--border-radius);
    padding: var(--card-gutter) 0;
    font-size: var(--card-font-size);
    display: flex;
    flex-flow: column;
    position: relative;
  }

  .active {
    outline: 3px solid var(--active-color);
    outline-offset: -2px;
  }

  :global(.card > *) {
    padding-left: var(--card-gutter);
    padding-right: var(--card-gutter);
  }

  :global(.card .fullwidth) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }

  :global(.card .tiled * .fullwidth) {
    margin-left: calc(-1 * var(--card-gutter));
    margin-right: calc(-1 * var(--card-gutter));
  }

  :global(.card .fullwidth.padded) {
    padding-left: var(--card-gutter);
    padding-right: var(--card-gutter);
  }

  :global(.card:has(.fullwidth:last-child)) {
    padding-bottom: 0;
  }

  :global(.card hr) {
    margin: 0.5em var(--card-gutter) 2em;
  }

  :global(.card hr.fullwidth) {
    margin-left: 0;
    margin-right: 0;
  }
</style>
