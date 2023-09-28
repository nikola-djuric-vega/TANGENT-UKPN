import { BaseIconProps } from '_types/local'

const Fish = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M17.2799 7.55005C16.0499 8.98005 15.3799 10.8 15.3799 12.68C15.3799 14.65 16.0999 16.44 17.2899 17.82"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="18"
        y="11"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M0.75 9.87003C9.43 19.6 17.34 21.42 23.25 12.68C17.34 3.95003 9.43 5.77003 0.75 15.5"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4399 10.99C10.6899 12.11 10.6899 13.24 11.4399 14.37"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Fish
