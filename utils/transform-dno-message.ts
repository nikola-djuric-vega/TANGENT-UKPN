export const transformDnoMessage = (message: string, postcode: string) => {
  return message.replace(/%POSTCODE%/gm, postcode.toUpperCase())
}
