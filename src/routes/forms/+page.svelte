<script>
  import Page from '~/layout/Page.svelte'
  import Card from '~/components/Card.svelte'
  import Tiled from '~/components/Tiled.svelte'
  import SearchInput from '~/components/SearchInput.svelte'

  const searchHandler = (e) => {
    console.log('searchHandler called with value', e.detail)
  }

  let b = 3
</script>

<!-- MARKUP -->
<Page>
  <h1>Forms</h1>

  <Tiled>
    <Card>
      <h3>Card 1</h3>

      <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus.</p>

      <label>
        Normal Caps, Top Label
        <input type="text" value="foo" />
      </label>

      <Tiled gap="0.5em">
        <label>
          First Name
          <input type="text" />
        </label>

        <label>
          Last Name
          <input type="text" />
        </label>
      </Tiled>

      <label class="inline">
        inline label
        <input type="text" placeholder="email goes here">
      </label>

      <hr class="fullwidth" />

      <label class="inline">
        inline label 1
        <input type="text" >
      </label>

      <label class="inline">
        inline label with longer text 2
        <input type="text" >
      </label>

      <label class="inline">
        Checkbox
        <input type="checkbox" checked="true" />
      </label>
    </Card>

    <Card>
      <h3>Card 2</h3>

      <SearchInput on:submit={searchHandler} />

      <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus. Vestibulum semper, dolor a posuere venenatis, nunc augue volutpat ante, eu fringilla nunc libero a nibh.</p>

      <label>
        Number &amp; Range
        <div class="split">
          <input type="number" bind:value={b} min=0 max=10>
          <input type="range" bind:value={b} min=0 max=10>
        </div>
      </label>

      <label>
        Password
        <div class="split">
          <input type="password" placeholder="secret" value="123" />
          <input type="email" placeholder="email" value="foo@gmail.com" />
        </div>
      </label>

      <!-- <label class="inline">
        Radio
        <input type="radio" name="foo" value="bar" />
        <input type="radio" name="foo" value="baz" />
      </label> -->
    </Card>
  </Tiled>
</Page>

<!-- STYLES -->
<style lang="scss">
  .card-footer {
    flex: 0;
    padding-top: var(--card-gutter);
    border-top: 1px solid var(--foreground-10);
  }
</style>
