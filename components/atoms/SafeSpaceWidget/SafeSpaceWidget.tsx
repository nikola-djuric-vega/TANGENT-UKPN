import React, { useEffect, useCallback, useRef } from 'react'
import styles from './SafeSpaceWidget.module.scss'
import Image from 'next/image'
import axios from 'axios'

export interface SafeSpaceWidget {
  widget: string
  error: boolean
  isOpen: boolean
}

const SafeSpaceWidget = ({}) => {
  const [safeSpaceWidget, setSafeSpaceWidget] = React.useState<SafeSpaceWidget>(
    {
      widget: '',
      error: false,
      isOpen: false,
    }
  )

  useEffect(() => {
    if (!safeSpaceWidget.isOpen) {
      document.body.classList.remove('modal-open')
    }
  }, [safeSpaceWidget.isOpen])
  const ref = useRef<HTMLDivElement>(null)

  const fetchParcelApi = useCallback(async (query: string) => {
    return await axios
      .get((process.env.NEXT_PUBLIC_PARCEL_FORCE_API as string) + query)
      .then((res) => res.data)
      .catch((err) =>
        setSafeSpaceWidget((prevState) => ({ ...prevState, error: true }))
      )
  }, [])

  const createSafeSpaceScript = () => {
    const script = document.createElement('script')
    script.setAttribute('src', process.env.NEXT_PUBLIC_SAFE_SPACE_URL as string)
    script.setAttribute('id', 'safeSpaceWidgetScript')
    script.setAttribute('async', '')
    script.onerror = function handleScriptError() {
      setSafeSpaceWidget((prevState) => ({
        ...prevState,
        error: true,
      }))
    }
    document.head.appendChild(script)
  }

  const removeSafeSpaceScript = () => {
    const script = document.getElementById('safeSpaceWidgetScript')
    script?.parentNode?.removeChild(script)
  }

  const fetchWidget = async () => {
    const { isAlive } = await fetchParcelApi('/sso/Home/IsAlive')
    if (isAlive) {
      createSafeSpaceScript()
      const data = await fetchParcelApi('/sso/')
      const tempContainer = document.createElement('div')
      tempContainer.innerHTML = data
      const widget = tempContainer.querySelector(
        '#safeSpaceWidget-Component'
      )?.outerHTML
      if (ref.current && widget) {
        setSafeSpaceWidget((prevState) => ({
          ...prevState,
          widget: widget,
          error: false,
        }))
      }
    }
  }

  useEffect(() => {
    fetchWidget()
  }, [fetchParcelApi, safeSpaceWidget.widget.length])

  // Handle widget to open on click
  const widgetClickHandler = (isOpen: boolean) => {
    if (!isOpen) {
      removeSafeSpaceScript()
    }

    if (isOpen) {
      fetchWidget()
    }
    setSafeSpaceWidget((prevState) => {
      return {
        ...prevState,
        isOpen: isOpen,
      }
    })
  }

  // Handle exit on escape when widget is opened
  const handleEsc = useCallback((event) => {
    if (event.keyCode === 27) {
      removeSafeSpaceScript()
      setSafeSpaceWidget((prevState) => ({
        ...prevState,
        isOpen: false,
      }))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleEsc, { passive: true })
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleEsc])

  // Handle exit on X button when widget is opened
  let closeButton

  if (typeof window === 'object') {
    setTimeout(() => {
      closeButton = document?.querySelector('.btn-close-widget')
      closeButton?.addEventListener('click', function (e) {
        e?.preventDefault()
        removeSafeSpaceScript()
        setSafeSpaceWidget((prevState) => {
          return { ...prevState, isOpen: false }
        })
      })
      safeSpaceWidget.isOpen
        ? document?.body?.setAttribute('style', 'overflow: hidden')
        : document?.body?.setAttribute('style', 'overflow: auto')
    }, 200)
  }

  if (safeSpaceWidget?.error) {
    return null
  } else {
    return (
      <section className={styles.SafeSpaceWidget} ref={ref}>
        <div
          className={styles.inner}
          onClick={() => {
            document.body.classList.add('modal-open')
            widgetClickHandler(true)
          }}
        >
          <div className={styles.SafeSpaceWidgetLogo}>
            <Image
              title="Together we can end domestic abus"
              alt="Together we can end domestic abus"
              src="/images/safelogo_600x376.png"
              layout="intrinsic"
              height={376}
              width={600}
            />
          </div>
          <p className={styles.SafeSpaceWidgetTitle}>
            Together we can end domestic abuse
          </p>
        </div>
        {!!safeSpaceWidget.isOpen && (
          <div className={styles.testing}>
            <div
              dangerouslySetInnerHTML={{
                __html: safeSpaceWidget.widget,
              }}
              data-target-element="page"
              data-launch-safespace
            />
          </div>
        )}
      </section>
    )
  }
}

export default SafeSpaceWidget
