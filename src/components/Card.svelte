<!-- MARKUP -->
<div class="card">
  <slot />
</div>

<!-- STYLES -->
<style lang="scss">
  :root {
    --card-font-size: 0.85rem;
  }

  .card {
    border: 1px solid var(--foreground-25);
    border-radius: var(--border-radius);
    padding: var(--card-gutter) 0;
    font-size: var(--card-font-size);
    display: flex;
    flex-flow: column;
    position: relative;
  }

  :global(.card > *) {
    padding-left: var(--card-gutter);
    padding-right: var(--card-gutter);
  }

  :global(.card *.fullwidth) {
    margin-left: calc(-1 * var(--card-gutter));
    margin-right: calc(-1 * var(--card-gutter));
    padding-left: var(--card-gutter);
    padding-right: var(--card-gutter);
  }
</style>
