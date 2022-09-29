<script>
  import { page } from '$app/stores'

  export let href
  export let exact = false
  let classNames
  export { classNames as class }

  $: active = exact
              ? $page.url.pathname === href
              : $page.url.pathname.indexOf(href) === 0
</script>

<a href={href} class={classNames} class:active>
  <slot />
</a>
