import { BaseIconProps } from '_types/local'

const TreeCutting = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14.8901 23.62V17.5"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8901 17.37H12.5101H12.3001C10.3301 17.25 8.82007 15.47 8.94007 13.41C8.95007 13.19 8.98007 12.97 9.03007 12.76C7.51007 11.44 7.30007 9.07003 8.57007 7.48003C8.81007 7.18003 9.08007 6.92003 9.40007 6.72003C8.43007 4.92003 9.04007 2.63003 10.7601 1.61003C12.0901 0.820028 13.7601 1.01003 14.9001 2.08003C16.3701 0.700028 18.6301 0.830028 19.9501 2.38003C20.9701 3.58003 21.1501 5.32003 20.4001 6.72003C22.0601 7.83003 22.5501 10.15 21.4901 11.89"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.78003 3.72998V23.57"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M0.780029 6.42993H6.78003"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2.21997 8.84998H5.18997"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M1.1001 4.69003V4.16003"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6.58008 4.69003V4.16003"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M3.23993 13.24H1.92993V16.3H3.47993"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.28 13.13V23.58"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.99 13.13V23.58"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.28 15.3H18.99"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.28 18.26H18.99"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.28 21.22H18.99"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TreeCutting
