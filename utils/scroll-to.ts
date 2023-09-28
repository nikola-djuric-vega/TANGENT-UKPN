export const scrollTo = (id: string, offset: number = 100) => {
  const element = document.getElementById(id)
  const elementPosition = element?.getBoundingClientRect().top
  const offsetPosition =
    (elementPosition as number) + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}
