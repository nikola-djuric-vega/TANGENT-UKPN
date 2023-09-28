import { BaseIconProps } from '_types/local'

const Extension = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M5.19995 0.839966V23.34"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M0.75 3.90997H9.66"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M2.88989 6.63995H7.29989"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M1.22998 1.91995V1.31995"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M9.37012 1.91995V1.31995"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M19.22 3.49994V23.3399"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.2 6.26996H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M17.1299 8.73993H21.1199"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.6299 4.47994V3.93994"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M22.99 4.47994V3.93994"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M11.9199 12.77C14.7499 13.04 16.2599 11.43 16.3299 11.35"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M11.5799 12.72C8.78991 12.06 7.71991 10.02 7.65991 9.90997"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default Extension
