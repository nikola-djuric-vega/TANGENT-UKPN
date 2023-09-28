import { BaseIconProps } from '_types/local'

const Location = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14 2L9.74256 13.7898C9.71382 13.8525 9.66769 13.9057 9.60963 13.9429C9.55158 13.9802 9.48405 14 9.41507 14C9.34608 14 9.27855 13.9802 9.2205 13.9429C9.16244 13.9057 9.11631 13.8525 9.08757 13.7898L6.7951 9.2049L2.21017 6.91243C2.14746 6.88369 2.09432 6.83756 2.05706 6.7795C2.0198 6.72145 2 6.65392 2 6.58493C2 6.51595 2.0198 6.44842 2.05706 6.39037C2.09432 6.33231 2.14746 6.28618 2.21017 6.25744L14 2Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Location
