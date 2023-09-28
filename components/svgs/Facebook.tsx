import { BaseIconProps } from '_types/local'

const Facebook = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <path d="M6.528 8.99999V16H9.63941V8.99999H11.9594L12.4008 6.10434H9.63941V4.22534C9.61951 4.00984 9.64831 3.79262 9.72369 3.58976C9.79908 3.38689 9.91911 3.20357 10.0749 3.05336C10.2307 2.90314 10.4183 2.78988 10.6238 2.72195C10.8292 2.65402 11.0474 2.63316 11.262 2.66091H12.5175V0.19565C11.7804 0.0758458 11.0354 0.0104524 10.2887 0C8.01448 0 6.528 1.38678 6.528 3.89739V6.10439H4V9.00004L6.528 8.99999Z" />
    </svg>
  )
}

export default Facebook
