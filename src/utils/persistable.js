import { browser } from '$app/env'
import { writable } from 'svelte/store'

export const persistable = (...args) => {
  if (args.length < 2) {
    throw new Error('persistable(key, defaultValue) requires both a key:string, and default value')
  }

  const [ key, defaults, ...other ] = args
  let value = browser ? window.localStorage.getItem(key) : null

  if (value !== null) {
    value = JSON.parse(value)
  } else {
    value = defaults
  }

  const store = writable(value, ...other)
  store.subscribe(v => {
    if (browser) {
      window.localStorage.setItem(key, JSON.stringify(v))
    }
  })

  return store
}
