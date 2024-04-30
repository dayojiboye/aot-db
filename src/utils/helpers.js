export const getCharacterInitial = (firstName = '') => {
  if (!firstName) return ''
  const initials = firstName[0].toUpperCase()
  return initials
}
