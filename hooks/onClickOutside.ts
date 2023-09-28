import { useEffect, RefObject } from 'react'

type AnyEvent = MouseEvent | TouchEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current
      const cookieOverlay = document.getElementById('ccc')
      const isClickingOnCookieElement =
        cookieOverlay && cookieOverlay.contains(event.target as Node)
      const isClickingOnPopUpElement = el && el.contains(event.target as Node)

      // Do nothing if clicking in the cookie overlay, the ref's element or descendent elements
      if (isClickingOnPopUpElement || isClickingOnCookieElement) {
        return
      }

      handler(event)
    }

    document.addEventListener(`mousedown`, listener, { passive: true })
    document.addEventListener(`touchstart`, listener, { passive: true })

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }

    // Reload only if ref or handler changes
  }, [ref, handler])
}

export default useOnClickOutside
