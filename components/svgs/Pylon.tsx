import { BaseIconProps } from '_types/local'

const Pylon = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M7.77193 13.8683L21.7314 23.34C21.7764 23.34 16.1761 13.8683 16.1761 13.8683L2.26855 23.34C2.26855 23.34 7.85049 13.8683 7.77193 13.8683Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.78833 6.6438L16.1926 13.8704C16.2349 13.8704 16.1926 6.6438 16.1926 6.6438L7.78833 13.8704C7.78833 13.8704 7.86223 6.6438 7.78833 6.6438Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.81299 6.59197L12.025 0.839966L16.236 6.59197"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9.13899V6.42999H4.997"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2499 9.13899V6.42999H19.0029"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Pylon
