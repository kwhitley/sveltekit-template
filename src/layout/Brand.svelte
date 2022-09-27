<script>
  import { VERSION } from '~/constants'

  export let showVersion = false
</script>

<!-- MARKUP -->
<div class="brand">
  <a href="/">
    <slot>
      SvelteKit Template
    </slot>
  </a>

  {#if showVersion}
    <div class="version">
      v{VERSION}
    </div>
  {/if}
</div>

<!-- STYLES -->
<style lang="scss">
  .brand {
    align-self: center;
    white-space: nowrap;
  }

  .version {
    font-size: 0.75rem;
    opacity: 0.6;
    transition: all 0.3s ease;
    align-self: center;

    &:hover {
      opacity: 1;
    }
  }

  a {
      font-size: 2rem;
      letter-spacing: -0.05em;
      transition: color 0.2s ease;
      display: inline-block;
      transform-origin: 0% 50%;
      color: rgba(0, 0, 0, 0.8);
      // color: rgba(255, 0, 200, 0.2);

      &:hover {
        color: var(--accent-color);
      }
    }
</style>
