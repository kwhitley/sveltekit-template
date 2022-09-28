<script>
  export let open = false

  const toggle = () => open = !open
</script>

<!-- MARKUP -->
<section class:open on:click={toggle}>
  <div class="top"></div>
  <div class="middle"></div>
  <div class="bottom"></div>
</section>

<!-- STYLES -->
<style lang="scss">
  section {
    --transform-time: 0.2s;
    --bar-thickness: 3px;
    --bar-gap: 0.3rem;
    // width: 2em;
    width: 100%;
    --icon-color: var(--foreground-color);
    cursor: pointer;
    transition: all var(--transform-time) ease;
    display: flex;
    flex-flow: column;
    align-items: flex-end;

    &.open {
      .top, .middle {
        width: 80%;
      }

      .top {
        transform: rotate(45deg);
      }

      .middle {
        transform: rotate(-45deg) translate(20%, calc(-250% + var(--bar-thickness) * 0.5));
      }

      .bottom {
        max-width: 100%;
        background-color: var(--foreground-25);
        margin-top: 0.5em;
      }
    }

    &:hover {
      // opacity: 0.4;
      --icon-color: var(--accent-color);
      // transform: scale(1.1);
    }
  }

  div {
    height: var(--bar-thickness);
    background-color: var(--icon-color);
    margin-bottom: var(--bar-gap);
    border-radius: 1em;
    width: 100%;
    max-width: 2em;
    transition: all var(--transform-time) ease;
  }
</style>
