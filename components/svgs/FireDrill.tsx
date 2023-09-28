import { BaseIconProps } from '_types/local'

const FireDrill = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.28 19.0899C15.2671 19.0899 19.31 15.0829 19.31 10.1399C19.31 5.19699 15.2671 1.18994 10.28 1.18994C5.29287 1.18994 1.25 5.19699 1.25 10.1399C1.25 15.0829 5.29287 19.0899 10.28 19.0899Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M15.5501 17.5099V22.2799C15.5501 23.0599 14.9101 23.6899 14.1201 23.6899H6.5301C5.7401 23.6899 5.1001 23.0599 5.1001 22.2799V17.5099"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M22.16 10.8799C22.28 14.9299 19.47 18.6099 15.8 20.1699"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M23.488 11.7536C23.9687 11.0254 23.7643 10.0428 23.0315 9.55906C22.2986 9.07528 21.3148 9.27346 20.8341 10.0017C20.3533 10.73 20.5577 11.7125 21.2906 12.1963C22.0234 12.6801 23.0072 12.4819 23.488 11.7536Z"
        {...(baseColour && { stroke: '#27187E' })}
      />
      <path
        d="M10.33 9.81997C11.62 7.92997 10.33 5.35997 9.68997 4.71997C9.68997 6.65997 8.54997 7.73997 7.75997 8.53997C6.96997 9.33997 6.46997 10.6 6.46997 11.73C6.46997 13.84 8.19997 15.55 10.33 15.55C12.46 15.55 14.19 13.84 14.19 11.73C14.19 10.75 13.51 9.21997 12.9 8.53997C11.75 10.45 11.1 10.45 10.33 9.80997V9.81997Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FireDrill
