import { BaseIconProps } from '_types/local'

const Person = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M8.00352 7.5557C8.9057 7.55477 9.7706 7.19561 10.408 6.55717C11.0455 5.91874 11.4033 5.05329 11.4029 4.1511C11.4024 3.24891 11.0437 2.38383 10.4056 1.74605C9.76747 1.10827 8.90221 0.75 8.00002 0.75C7.09783 0.75 6.23257 1.10827 5.59446 1.74605C4.95635 2.38383 4.59763 3.24891 4.59717 4.1511C4.5967 5.05329 4.95453 5.91874 5.59198 6.55717C6.22944 7.19561 7.09433 7.55477 7.99652 7.5557H8.00352Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15.25V12.25C3.00155 11.72 3.21276 11.2122 3.5875 10.8375C3.96224 10.4628 4.47004 10.2516 5 10.25H11C11.53 10.2516 12.0378 10.4628 12.4125 10.8375C12.7872 11.2122 12.9984 11.72 13 12.25V15.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Person
