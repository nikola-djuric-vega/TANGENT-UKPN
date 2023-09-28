import { BaseIconProps } from '_types/local'

const CircledSmallArrow = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M25 20L20.5 24.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 20L15 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 20L20.5 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="38.5"
        rx="19.25"
        strokeWidth="1.5"
        stroke="currentColor"
      />
    </svg>
  )
}

export default CircledSmallArrow
