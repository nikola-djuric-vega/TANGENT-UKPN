import { BaseIconProps } from '_types/local'

const ArrowLongVertical = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 43"
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M9 41L1 33"
        stroke="#464A5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00011 41L9 1"
        stroke="#464A5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 41L17 33"
        stroke="#464A5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLongVertical
