export const getElementPopupPosition = (elem: HTMLDivElement) => {
  const box = elem.getBoundingClientRect()

  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0

  // 17px === triangle height above popup
  const top = box.bottom + scrollTop - clientTop + 17
  const left = box.left + scrollLeft - clientLeft + elem.clientWidth / 2

  return { top: Math.round(top), left: Math.round(left) }
}
