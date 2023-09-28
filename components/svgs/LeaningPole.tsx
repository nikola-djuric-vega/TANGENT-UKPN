import { BaseIconProps } from '_types/local'

const LeaningPole = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M5.27002 1.18994V23.5499"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M0.840088 4.23999H9.70009"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2.96997 6.94995H7.34997"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M1.32007 2.26992V1.66992"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M9.41016 2.26992V1.66992"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M16.9202 5.04004L23.3402 23.69"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.0303 8.94997L21.6003 6.33997"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M16.6501 10.64L20.4001 9.35999"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8602 7.13L13.6802 6.62"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M20.7801 4.74999L20.6001 4.23999"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M11.95 13.05C12.65 13.12 13.28 13.07 13.81 12.95C14.44 12.82 14.96 12.59 15.36 12.37"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M11.61 12.99C8.83997 12.33 7.76997 10.3 7.71997 10.2"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default LeaningPole
