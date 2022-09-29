<script>
  import Page from '~/layout/Page.svelte'
  import Rating from '~/components/Rating.svelte'
  import Card from '~/components/Card.svelte'
  import Tiled from '~/components/Tiled.svelte'
</script>

<!-- MARKUP -->
<Page>
  <h1>Misc</h1>

  <p>Here's a rating: <Rating inline value={3.4} /></p>

  <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus. Vestibulum semper, dolor a posuere venenatis, nunc augue volutpat ante, eu fringilla nunc libero a nibh. Curabitur sed euismod lorem, eget convallis odio. Nulla tincidunt fringilla ligula sed elementum. Proin ex odio, tempus vitae auctor vitae, sagittis ac dolor. Nullam luctus lorem sed dui iaculis, id elementum ipsum pulvinar. Etiam id lobortis libero. Praesent tempor pulvinar arcu eget tempor. Proin scelerisque feugiat orci, faucibus laoreet neque. Maecenas auctor ipsum eget auctor porta. Suspendisse venenatis metus commodo enim vestibulum interdum.</p>

  <h2>Tiled/Cards</h2>
  <Tiled>
    <Card>
      <h3>Card 1</h3>

      <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus. Vestibulum semper, dolor a posuere venenatis, nunc augue volutpat ante, eu fringilla nunc libero a nibh. Curabitur sed euismod lorem, eget convallis odio. Nulla tincidunt fringilla ligula sed elementum. Proin ex odio, tempus vitae auctor vitae, sagittis ac dolor. Nullam luctus lorem sed dui iaculis, id elementum ipsum pulvinar. Etiam id lobortis libero. Praesent tempor pulvinar arcu eget tempor. Proin scelerisque feugiat orci, faucibus laoreet neque. Maecenas auctor ipsum eget auctor porta. Suspendisse venenatis metus commodo enim vestibulum interdum.</p>
    </Card>

    <Card>
      <Tiled vertical split>
        <div>
          <h3>Card 2</h3>

          <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus.</p>
        </div>

        <div class="card-footer fullwidth">
          card footer
        </div>
      </Tiled>
    </Card>
  </Tiled>

  <h2>Tiled/Cards</h2>
  <Tiled vertical>
    <Card>
      <h3>Card 1</h3>

      <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus. Vestibulum semper, dolor a posuere venenatis, nunc augue volutpat ante, eu fringilla nunc libero a nibh. Curabitur sed euismod lorem, eget convallis odio. Nulla tincidunt fringilla ligula sed elementum. Proin ex odio, tempus vitae auctor vitae, sagittis ac dolor. Nullam luctus lorem sed dui iaculis, id elementum ipsum pulvinar. Etiam id lobortis libero. Praesent tempor pulvinar arcu eget tempor. Proin scelerisque feugiat orci, faucibus laoreet neque. Maecenas auctor ipsum eget auctor porta. Suspendisse venenatis metus commodo enim vestibulum interdum.</p>
    </Card>

    <Card>
      <h3>Card 2</h3>

      <p>Ut tellus neque, blandit ac est in, tempor dictum lorem. Donec et pellentesque tellus.</p>
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
