import { BaseIconProps } from '_types/local'

const Litter = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M2.03003 6.12H22.03"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.53003 11.12V16.72"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.53 11.12V15.54"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.28003 6.12V2.37C8.28003 1.68 8.84003 1.12 9.53003 1.12H14.53C15.22 1.12 15.78 1.68 15.78 2.37V6.12"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.19 18.31C21.58 17.51 23.07 22.51 23.28 23.61H0.780029C0.780029 23.61 2.19003 16.56 7.97003 18.93C11.51 20.38 11.17 17.61 14.18 17.61C15.78 17.61 16.08 18.81 18.19 18.31Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.95 16.12L20.78 6.12H3.28003L4.13003 16.34"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Litter
