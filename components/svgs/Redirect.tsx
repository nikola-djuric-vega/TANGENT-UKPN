import { BaseIconProps } from '_types/local'

const Redirect = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Redirect</title>
      <path
        d="M7.46154 3H2.84615C2.35652 3 1.88695 3.1945 1.54073 3.54073C1.1945 3.88695 1 4.35652 1 4.84615V13.1538C1 13.6435 1.1945 14.1131 1.54073 14.4593C1.88695 14.8055 2.35652 15 2.84615 15H11.1538C11.6435 15 12.1131 14.8055 12.4593 14.4593C12.8055 14.1131 13 13.6435 13 13.1538V8.53846"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L15 1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1H15V6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Redirect
