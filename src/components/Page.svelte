<main class="page">
  <div>
    <slot />
  </div>
</main>


<style lang="scss">
  main {
    flex: 1 100%;
    padding: 3rem 2rem;
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 2rem;

    div {
      text-align: left;
      max-width: var(--max-page-width);
      display: inline-block;
      width: 100%;
    }
  }
</style>
