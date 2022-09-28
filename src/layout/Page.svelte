<main class="page">
  <div>
    <slot />
  </div>
</main>


<style lang="scss">
  main {
    flex: 1 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  :global(.constrained .page > div) {
    max-width: var(--max-page-width);
  }
</style>
