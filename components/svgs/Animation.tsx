import { BaseIconProps } from '_types/local'

const Anitmation = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 70.25 70.25"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <circle cx="35.13" cy="35.13" r="35.13" />
      <path d="M35.12 65.37a30.25 30.25 0 1 1 30.25-30.25 30.28 30.28 0 0 1-30.25 30.25zm0-58.49a28.25 28.25 0 1 0 28.25 28.24A28.28 28.28 0 0 0 35.12 6.88z" />
    </svg>
  )
}

export default Anitmation
