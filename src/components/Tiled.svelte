<script>
  export let split = false
  export let vertical = false
</script>

<!-- MARKUP -->
<section class="tiled" class:vertical class:split>
  <slot />
</section>

<!-- STYLES -->
<style lang="scss">
  :root {
    --gap: var(--tile-gutter);
  }

  .tiled {
    display: flex;
    gap: var(--gap);

    &.split {
      height: 100%;
      justify-content: space-between;
    }

    &.vertical {
      flex-flow: column;
    }
  }

  :global(.tiled:not(.centered) > *) {
    flex: 1;
  }
</style>
