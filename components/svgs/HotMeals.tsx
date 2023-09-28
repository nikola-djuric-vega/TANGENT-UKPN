import { BaseIconProps } from '_types/local'

const HotMeals = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.75 23.6899H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 13.49H23.25C23.25 19.12 18.77 23.69 13.25 23.69H10.75C5.23 23.69 0.75 19.12 0.75 13.49Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.40002 9.64992C8.67002 9.30992 9.04002 8.74992 9.04002 8.05992C9.04002 6.82992 7.87002 6.30992 7.78002 5.09992C7.74002 4.61992 7.87002 3.87992 8.73002 2.91992"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.88 7.90993C12.15 7.56993 12.52 7.00993 12.52 6.31993C12.52 5.08993 11.35 4.56993 11.26 3.35993C11.22 2.87993 11.35 2.13993 12.21 1.17993"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5599 9.67995C15.8299 9.33995 16.1999 8.77995 16.1999 8.08995C16.1999 6.85995 15.0299 6.33995 14.9399 5.12995C14.8999 4.64995 15.0299 3.90995 15.8899 2.94995"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HotMeals
