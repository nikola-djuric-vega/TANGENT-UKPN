export const trimName = (name: string) => {
  const splitNames = name?.split(' ')
  const firstName = splitNames?.[0]
  const secondName = splitNames?.[1]
  const secondNameFirstLetter = secondName?.charAt(0)
  const newName = `${firstName} ${secondNameFirstLetter}`
  return newName
}
