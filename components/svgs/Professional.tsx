import { BaseIconProps } from '_types/local'

const Professional = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M9.8301 11.8199L9.8101 13.7399C9.5001 13.9099 8.8601 14.2399 7.6301 14.7999C5.6601 15.6799 4.1101 16.3799 3.4101 17.5699C2.9701 18.4599 2.7801 19.4899 2.8501 20.5299"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.27 11.8199L15.29 13.7399C15.6 13.9099 16.24 14.2399 17.47 14.7999C19.44 15.6799 20.99 16.3799 21.69 17.5699C22.13 18.4599 22.32 19.4899 22.25 20.5299"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.61 7.98994C16.61 10.4199 14.79 12.8699 12.55 12.8699C10.31 12.8699 8.48999 10.4199 8.48999 7.98994V5.24994C8.48999 4.16994 8.91999 3.13994 9.67999 2.37994C10.44 1.61994 11.47 1.18994 12.55 1.18994C13.63 1.18994 14.66 1.61994 15.42 2.37994C16.18 3.13994 16.61 4.16994 16.61 5.24994V7.98994V7.98994Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3501 17.55L11.3201 22.94L12.5501 23.69L13.7801 22.94L12.7901 17.55"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1602 15.62L11.8502 16.56H13.2502L13.9402 15.62"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Professional
