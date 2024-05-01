export const getCharacterInitial = (firstName = '') => {
  if (!firstName) return ''
  const initials = firstName[0].toUpperCase()
  return initials
}

export function debounce(fn, wait) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer) // clear any pre-existing timer
    }
    const context = this // get the current context
    timer = setTimeout(() => {
      fn.apply(context, args) // call the function if time expires
    }, wait)
  }
}
