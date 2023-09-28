export const getCurrentDay = () => {
  const today = new Date()
  let year = today.getFullYear()

  let month = (1 + today.getMonth()).toString()
  month = month.length > 1 ? month : '0' + month

  let day = today.getDate().toString()
  day = day.length > 1 ? day : '0' + day

  return month + '/' + day + '/' + year
}
