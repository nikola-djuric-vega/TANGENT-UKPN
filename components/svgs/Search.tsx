import { BaseIconProps } from '_types/local'

const Search = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M6.75002 10.5C8.8211 10.5 10.5 8.8211 10.5 6.75002C10.5 4.67894 8.8211 3 6.75002 3C4.67894 3 3 4.67894 3 6.75002C3 8.8211 4.67894 10.5 6.75002 10.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47339 9.47339L13.0001 13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search
