import { BaseIconProps, IconType } from '_types/local'

const Time = ({
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
            d="M12 5.75121V12L14.2017 14.2017"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
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
            d="M8 4.66736V8.00005L9.17423 9.17428"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default Time
