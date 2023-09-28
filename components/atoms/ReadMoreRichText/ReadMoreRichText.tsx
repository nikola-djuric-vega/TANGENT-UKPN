import { ButtonAppearance, ButtonColors, ButtonLayout } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './ReadMoreRichText.module.scss'
import { useState, useRef, useEffect } from 'react'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'

export interface ReadMoreRichTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  readMoreText?: string
  isPinned?: boolean
  text: string
}

export interface ReadMoreRichTextState {
  currentHeight?: number
  icon: IconNames
  label: string
  show: boolean
}

const ReadMoreRichText = ({
  isPinned = false,
  readMoreText,
  className,
  text,
  ...props
}: ReadMoreRichTextProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const stylingClass = className
    ? [styles.ReadMoreRichText, className].join(' ')
    : styles.ReadMoreRichText
  const [{ currentHeight, icon, label, show }, setReadMoreState] =
    useState<ReadMoreRichTextState>({
      icon: IconNames.DOWN_CHEVRON,
      label: 'Read more',
      show: false,
    })

  const windowSize = debounce(() => {
    setReadMoreState((prev) => ({
      ...prev,
      currentHeight: scrollHeight(prev.show),
    }))
  }, 200)

  const scrollHeight = (show: boolean) => {
    if (contentRef.current) {
      const mockDiv = document.createElement('div')
      if (className) {
        mockDiv.classList.add(className)
      }
      mockDiv.innerHTML = !!show && !!readMoreText ? text + readMoreText : text
      contentRef.current.appendChild(mockDiv)
      const newScrollHeight = mockDiv.scrollHeight
      contentRef.current.removeChild(mockDiv)
      return newScrollHeight
    }
  }

  useEffect(() => {
    window.addEventListener('resize', windowSize, { passive: true })
    windowSize()

    const mockDiv = document.createElement('div')
    mockDiv.innerHTML = text
    const lastChild = mockDiv.lastChild as HTMLParagraphElement

    if (contentRef.current && !!readMoreText) {
      Array.from(contentRef.current.children).map((child) => {
        if (lastChild.innerHTML === child.innerHTML) {
          child.classList.add(styles.elipses)
        }
      })
    }

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  const toggleShow = () => {
    setReadMoreState((prevState) => ({
      icon: prevState.show ? IconNames.DOWN_CHEVRON : IconNames.ICO_BACK_TO_TOP,
      label: `Read ${!prevState.show ? 'less' : 'more'}`,
      currentHeight: scrollHeight(!prevState.show),
      show: !prevState.show,
    }))
  }

  return (
    <>
      <div
        {...props}
        dangerouslySetInnerHTML={{
          __html: !!readMoreText ? text + readMoreText : text,
        }}
        className={stylingClass}
        data-is-open={show}
        ref={contentRef}
        style={{
          height: currentHeight,
        }}
      ></div>
      {(!!readMoreText || !!isPinned) && (
        <div className={styles.controls}>
          {!!readMoreText && (
            <Button
              appearance={ButtonAppearance.SECONDARY}
              className={styles.toggleButton}
              layout={ButtonLayout.RTL}
              color={ButtonColors.DARK}
              onClick={toggleShow}
              aria-label={label}
              role="button"
              icon={icon}
            >
              {label}
            </Button>
          )}
          {isPinned && (
            <p className={styles.pinLabel}>
              <Icon name={IconNames.PIN}></Icon>
              Pinned
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default ReadMoreRichText
