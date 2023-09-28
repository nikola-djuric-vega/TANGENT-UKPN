import { ReactNode } from 'react'

export interface ComponentLayoutProps {
  outsideGridElementsDown?: ReactNode
  outsideGridElementsUp?: ReactNode
  removeBottomMargin?: boolean
  removeGridPadding?: boolean
  containerClass?: string
  innerClass?: string
  children: ReactNode
  isHero?: boolean
  isLandingHeroBanner?: boolean
}

const ComponentLayout = ({
  removeBottomMargin = false,
  removeGridPadding = false,
  outsideGridElementsDown,
  outsideGridElementsUp,
  containerClass,
  isHero = false,
  isLandingHeroBanner = false,
  innerClass,
  children,
  ...props
}: ComponentLayoutProps) => {
  return (
    <section
      className={`componentLayout ${containerClass ? containerClass : ''}`}
      data-remove-bottom-margin={removeBottomMargin}
      {...props}
    >
      {!!outsideGridElementsUp && outsideGridElementsUp}
      <div
        className={`componentInner ${innerClass ? innerClass : ''}`}
        data-remove-grid-padding={removeGridPadding}
        data-is-hero={isHero}
        data-is-landing-hero={isLandingHeroBanner}
      >
        {children}
      </div>
      {!!outsideGridElementsDown && outsideGridElementsDown}
    </section>
  )
}

export default ComponentLayout
