import escape from 'lodash/escape'

export const transformString = (str?: string) => {
  str = (str || '').toString()
  return escape(str.replace(/(<([^>]+)>)/gi, '')) as string
}
