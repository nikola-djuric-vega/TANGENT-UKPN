import { BaseIconProps } from '_types/local'

const DamagedMeterbox = ({
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
        d="M15.7499 2.98999C15.7499 1.94999 14.9099 1.10999 13.8699 1.10999H3.55993C2.51993 1.10999 1.67993 1.94999 1.67993 2.98999V17.99C1.67993 19.03 2.51993 19.87 3.55993 19.87H13.8799C14.9199 19.87 15.7599 19.03 15.7599 17.99"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 3.93005V7.68005"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 13.3099V17.0599"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.65991 19.9399V23.6199"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5601 9.23999V11.22"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.55 13.79C17.96 13.79 18.3 13.45 18.3 13.04C18.3 12.63 17.96 12.29 17.55 12.29C17.14 12.29 16.8 12.63 16.8 13.04C16.8 13.45 17.14 13.79 17.55 13.79Z"
        {...(baseColour && { fill: '#758BFD' })}
      />
      <path
        d="M13.12 15.57H21.99C22.69 15.57 23.25 14.99 23.25 14.29C23.25 14.13 23.22 13.97 23.16 13.82L18.66 6.05999C18.32 5.44999 17.55 5.22999 16.94 5.55999C16.73 5.67999 16.56 5.84999 16.44 6.05999L11.94 13.82C11.68 14.47 11.99 15.21 12.64 15.47C12.77 15.52 12.91 15.55 13.05 15.56"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DamagedMeterbox
