import { BaseIconProps } from '_types/local'

const CircledRightArrow = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <circle
        cx="12"
        cy="12.6799"
        r="11.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
      <path
        d="M17 12.6799L12.5 17.1799"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 12.6799L7 12.6799"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 12.6799L12.5 8.17993"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CircledRightArrow
