import { BaseIconProps } from '_types/local'

const RepairingRoof = ({
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
        d="M23.2499 0.75H14.8799"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.19995 15.09L10.26 0.75H17.9L14.6 9.36"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.25 23.25H0.75L2.1 20.06"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.68003 19.96C10.4532 19.96 11.08 18.89 11.08 17.57C11.08 16.25 10.4532 15.18 9.68003 15.18C8.90683 15.18 8.28003 16.25 8.28003 17.57C8.28003 18.89 8.90683 19.96 9.68003 19.96Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6799 15.17H2.2999C1.5299 15.17 0.899902 16.24 0.899902 17.56C0.899902 18.88 1.5299 19.95 2.2999 19.95H9.6799"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5601 12.19L11.0701 18.36"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RepairingRoof
