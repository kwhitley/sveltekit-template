import { page } from '$app/stores'

const isActive = (href, path, exact) => exact
                                        ? path === href
                                        : path.indexOf(href) === 0

const injectIfActive = (node, options = {}) => page => {
  const { exact = false } = options

  if (isActive(node.getAttribute('href'), page.url.pathname, exact)) {
    node.classList.add('active')
  } else {
    node.classList.remove('active')
  }
}

export const navlink = (...args) => ({
  destroy: page.subscribe(injectIfActive(...args)),
})
