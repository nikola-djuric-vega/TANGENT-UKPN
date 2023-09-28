import { BaseIconProps, IconType } from '_types/local'

const PowerCut = ({
  type = IconType.DEFAULT,
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  switch (type) {
    case IconType.LARGE:
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M19.6068 12L11.2917 23.25V16.82"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.75 9.5H13.9725V0.75L3.25 14.5H9.89595"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg
          viewBox="0 0 16 16"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M8.79011 0.75V6.38567H13.5L7.20989 15.25V9.61433H2.5L8.79011 0.75Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default PowerCut
