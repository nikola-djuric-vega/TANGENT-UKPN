import { BaseIconProps } from '_types/local'

const Bookmark = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M3 15.25V1.95832C3.00657 1.63267 3.14169 1.32283 3.37588 1.09645C3.61007 0.870068 3.92431 0.74552 4.25 0.749994H11.75C12.0757 0.74552 12.3899 0.870068 12.6241 1.09645C12.8583 1.32283 12.9934 1.63267 13 1.95832V15.25L8 12.0278L3 15.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bookmark
