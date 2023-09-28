import { BaseIconProps } from '_types/local'

const ArrowLongHorizontal = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 58 18"
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M57 9L49 17"
        stroke="#464A5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57 9L1 9"
        stroke="#464A5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57 9L49 1"
        stroke="#464A5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLongHorizontal
