<script>
  import { createEventDispatcher } from 'svelte'
  export let value
  export let label
  export let placeholder = 'search'

  const dispatch = createEventDispatcher()

  const submitHandler = e => {
    e.preventDefault()
    dispatch('submit', value)
    value = ''
  }
</script>

<!-- MARKUP -->
<form on:submit={submitHandler}>
  <input
    type="text"
    class="search"
    placeholder={placeholder}
    bind:value
    />
</form>

<!-- STYLES -->
<style lang="scss">
  form {
    margin-bottom: 1em;

    input {
      font-size: 2rem;
      padding-left: 0.4em;
      font-weight: 100;
    }
  }
</style>
