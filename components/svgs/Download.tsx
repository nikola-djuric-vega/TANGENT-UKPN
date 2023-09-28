import { BaseIconProps, IconType } from '_types/local'

const Download = ({
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
            d="M0.75 17.6899V20.4999C0.75 22.0499 2.01 23.3099 3.56 23.3099H20.44C21.99 23.3099 23.25 22.0499 23.25 20.4999V17.6899"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.53003 10.15L12 16.62L18.47 10.15"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1.08997V16.62"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M1 12V13.5C1 13.8978 1.18437 14.2794 1.51256 14.5607C1.84075 14.842 2.28587 15 2.75 15H13.25C13.7141 15 14.1592 14.842 14.4874 14.5607C14.8156 14.2794 15 13.8978 15 13.5V12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 7L8 11L12 7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 1V10.6667"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="blue"
          />
        </svg>
      )
  }
}

export default Download
