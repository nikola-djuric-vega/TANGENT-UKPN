import { BaseIconProps } from '_types/local'

const Pin = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M1.7335 6.16124L5.41771 9.84545L6.40583 13.7743L7.63158 15L15 7.63158L13.7743 6.40583L9.84545 5.41771L6.16124 1.7335M11.6842 11.6842L15 15M1 6.89474L6.89474 1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Pin
