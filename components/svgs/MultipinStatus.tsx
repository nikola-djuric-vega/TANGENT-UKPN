import { BaseIconProps } from '_types/local'

const MultipinStatus = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 72 72"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="36" cy="36" r="36" fill="#202539" />
        <path
          stroke="#F76100"
          strokeWidth="2"
          d="M36 6.207C19.546 6.207 6.207 19.546 6.207 36S19.546 65.793 36 65.793"
        />
        <path
          stroke="#118483"
          strokeWidth="2"
          d="M36 65.793c16.454 0 29.793-13.339 29.793-29.793a29.655 29.655 0 0 0-5.092-16.663C55.347 11.415 46.281 6.207 36 6.207"
        />
        <path
          stroke="#202539"
          strokeLinecap="square"
          strokeWidth="2"
          d="M36 3v65.03"
        />
        <path
          stroke="#202539"
          strokeWidth="1.5"
          d="M31.25 40a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0z"
        />
      </g>
    </svg>
  )
}

export default MultipinStatus
