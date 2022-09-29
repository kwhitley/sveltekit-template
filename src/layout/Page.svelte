<script>
  import { fade, fly } from 'svelte/transition'
</script>

<main class="page">
  <div
    in:fly={{ x: 100, duration: 300 }}
  >
    <slot />
  </div>
</main>


<style lang="scss">
  main {
    flex: 1 100%;
    padding: 3rem var(--page-gutter);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  :global(.constrained .page > div) {
    max-width: var(--max-page-width);
    width: 100%;
  }
</style>
