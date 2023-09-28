import { BaseIconProps } from '_types/local'

const EvCharging = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M20.5759 7.85864L18.6487 9.52919"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5811 13.3819C16.3695 13.3731 17.1365 13.6391 17.7501 14.1343C18.0245 14.3521 18.2473 14.6279 18.4026 14.9419C18.5579 15.2559 18.6419 15.6004 18.6486 15.9506V19.8038C18.6536 20.0665 18.7166 20.3248 18.8331 20.5604C18.9496 20.7959 19.1167 21.0027 19.3225 21.1661C19.786 21.5316 20.3591 21.7303 20.9493 21.7303C21.5396 21.7303 22.1127 21.5316 22.5762 21.1661C22.7819 21.0027 22.949 20.7958 23.0655 20.5603C23.182 20.3248 23.245 20.0665 23.25 19.8038V10.8131L18.6486 5.45404"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.31673 11.358L6.39014 14.5689H10.2434L8.31679 17.78"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 23.2501H16.1626"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.24951 6.18039H14.6633"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.24951 23.242V3.85235C2.25206 3.03015 2.57988 2.24237 3.16137 1.66109C3.74286 1.07981 4.53076 0.752259 5.35296 0.75H11.5599C12.3821 0.752259 13.1699 1.07981 13.7514 1.66109C14.3329 2.24237 14.6607 3.03015 14.6633 3.85235V23.242"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EvCharging
