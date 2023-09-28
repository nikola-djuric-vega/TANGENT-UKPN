import { BaseIconProps } from '_types/local'

const Substation = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.5938 14.8985H13.4062"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5938 17.2372H13.4062"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5938 19.5758H13.4062"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.25 21.375V4.5C23.25 4.00272 23.0525 3.52581 22.7008 3.17418C22.3492 2.82254 21.8723 2.625 21.375 2.625H2.625C2.12772 2.625 1.65081 2.82254 1.29918 3.17418C0.947545 3.52581 0.75 4.00272 0.75 4.5V21.375C0.75 21.375 8.25 21.3222 8.25 21.375V6.375H15.75V21.375H23.2498"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.358 11.5826C13.4739 11.7849 13.374 11.9505 13.136 11.9505H10.8641C10.6261 11.9505 10.5262 11.7849 10.6421 11.5826L11.7892 9.58062C11.804 9.53642 11.8323 9.49799 11.8701 9.47076C11.9079 9.44353 11.9534 9.42888 12 9.42888C12.0466 9.42888 12.092 9.44353 12.1298 9.47076C12.1677 9.49799 12.196 9.53642 12.2107 9.58062L13.358 11.5826Z"
        {...(baseColour && { fill: '#27187E' })}
      />
    </svg>
  )
}

export default Substation
