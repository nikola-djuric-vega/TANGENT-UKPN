import { BaseIconProps } from '_types/local'

const Meterbox = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12.1693 6.24218L4.91191 8.49843C3.9257 8.80504 3.37477 9.85307 3.68138 10.8393L4.2781 12.7587C4.5847 13.7449 5.63273 14.2958 6.61895 13.9892L13.8763 11.733C14.8625 11.4263 15.4135 10.3783 15.1068 9.3921L14.5101 7.47272C14.2035 6.48651 13.1555 5.93558 12.1693 6.24218Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M14.1092 3.26307L1.62843 7.14323C0.974474 7.34654 0.609151 8.04149 0.812461 8.69545L4.77277 21.434C4.97608 22.088 5.67103 22.4533 6.32499 22.25L18.8057 18.3698C19.4597 18.1665 19.825 17.4716 19.6217 16.8176L15.6614 4.07904C15.4581 3.42509 14.7631 3.05976 14.1092 3.26307Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M8.26001 16.1L9.01001 18.52"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M11.21 15.1901L11.96 17.6001"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.1699 14.27L14.9199 16.68"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M7.01001 10.5101L7.17001 11.0501"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M9.3501 9.80005L9.5101 10.34"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M11.75 9.08008L11.91 9.62008"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19.3101 6.96007L20.6101 6.45007"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M21.3401 11.17L23.2601 10.42"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19.28 9.40007L23.13 7.95007"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Meterbox
