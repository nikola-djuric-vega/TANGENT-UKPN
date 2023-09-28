import { BaseIconProps } from '_types/local'

const Sockets = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M19.17 1.18994H4.83C2.57668 1.18994 0.75 3.01662 0.75 5.26994V19.6099C0.75 21.8633 2.57668 23.6899 4.83 23.6899H19.17C21.4233 23.6899 23.25 21.8633 23.25 19.6099V5.26994C23.25 3.01662 21.4233 1.18994 19.17 1.18994Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.55005 15.5999H10.49"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.51 15.5999H16.45"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.27991V12.2199"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5499 6.27991H8.44989L4.88989 12.4399V18.5999H19.1099V12.4399L15.5499 6.27991Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Sockets
