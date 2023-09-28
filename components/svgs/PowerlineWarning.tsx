import { BaseIconProps } from '_types/local'

const PowerlineWarning = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M5.19995 0.75V23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M0.75 3.82001H9.66"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M2.88989 6.54999H7.29989"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M1.22998 1.82998V1.22998"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M9.37012 1.82998V1.22998"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M19.22 3.40997V23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.2 6.17999H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M17.1299 8.64996H21.1199"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.6299 4.38998V3.84998"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M22.99 4.38998V3.84998"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M11.8999 9.37L9.91992 13.33H13.8799L11.8999 17.29"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PowerlineWarning
