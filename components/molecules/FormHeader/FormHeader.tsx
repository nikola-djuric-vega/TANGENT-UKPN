import React, { useState, useEffect } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './FormHeader.module.scss'
import { LinkAppearance } from '_types/CMS'
import debounce from 'lodash/debounce'
import Image from 'next/image'

export interface FormHeaderProps {
  imageMobileUrl: string
  imageDesktopUrl: string
  title?: string
  showLogo?: boolean
}

const FormHeader = ({
  imageMobileUrl,
  imageDesktopUrl,
  showLogo = true,
  title,
}: FormHeaderProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateMobile = debounce(
      () => setIsMobile(window.innerWidth < 768 ? true : false),
      150
    )
    updateMobile()
    window.addEventListener('resize', updateMobile, { passive: true })
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  return (
    <div className={styles.header} role="group" aria-label="Website header">
      {showLogo && (
        <Link
          appearance={LinkAppearance.BLANK}
          url="https://www.ukpowernetworks.co.uk/"
        >
          {isMobile ? (
            <Image
              title="UK Power Network"
              src={imageMobileUrl}
              width={102}
              height={33}
              alt="logo"
            />
          ) : (
            <Image
              title="UK Power Network"
              src={imageDesktopUrl}
              width={138}
              height={58}
              alt="logo"
            />
          )}
        </Link>
      )}
      {title && (
        <h1 className={styles.title} tabIndex={0}>
          {title}
        </h1>
      )}
    </div>
  )
}

export default FormHeader
