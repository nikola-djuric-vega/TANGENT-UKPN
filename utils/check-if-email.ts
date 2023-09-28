export const checkIfEmail = (url: string, subject?: string) => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (url.match(emailPattern)) {
    return `mailto:${url}${!!subject ? `?subject=${subject}` : ''}`
  } else {
    return url
  }
}
