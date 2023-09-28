import { BaseIconProps } from '_types/local'

const ArrowHead = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 10 18"
      data-size={size}
      data-flip={flip}
      height="18"
      fill="none"
      width="10"
    >
      <path
        d="M1 1L9 9L0.999997 17"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="#E0E0E0"
        strokeWidth="2"
      />
    </svg>
  )
}

export default ArrowHead
