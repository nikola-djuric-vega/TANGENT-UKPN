import { BaseIconProps } from '_types/local'

const Success = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="11.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
      <path
        d="M6 12L10 16L18 8"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Success
