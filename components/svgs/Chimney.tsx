import { BaseIconProps } from '_types/local'

const Chimney = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.75 18.84L12 8.90997L16.69 13.05L16.81 10.35L19.35 11.11L19.29 15.35L23.25 18.84"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 18.14H9.5V23.25H14.5V18.14Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9901 8.2C18.4101 7.72 18.6901 7.37 18.6501 6.83C18.6001 6.18 17.8401 5.7 17.7601 5.1C17.7001 4.61 18.0301 4.19 18.7001 3.88"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.43 5.07C20.85 4.59 21.13 4.24 21.09 3.7C21.04 3.05 20.27 2.62 20.19 2.02C20.13 1.53 20.51 1.13 21.13 0.75"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Chimney
