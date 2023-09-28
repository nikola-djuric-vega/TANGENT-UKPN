import { BaseIconProps } from '_types/local'

const Meter = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M21.7 1.51001H2.3C1.44396 1.51001 0.75 2.20397 0.75 3.06001V16.79C0.75 17.6461 1.44396 18.34 2.3 18.34H21.7C22.556 18.34 23.25 17.6461 23.25 16.79V3.06001C23.25 2.20397 22.556 1.51001 21.7 1.51001Z"
        fill="white"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M8.44995 20.58V24.01"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M12 20.58V24.01"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M15.55 20.58V24.01"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M18.39 6.12H5.59995C5.10289 6.12 4.69995 6.52294 4.69995 7.02V9.61999C4.69995 10.1171 5.10289 10.52 5.59995 10.52H18.39C18.887 10.52 19.29 10.1171 19.29 9.61999V7.02C19.29 6.52294 18.887 6.12 18.39 6.12Z"
        fill="white"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M9.56006 6.12V10.87"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M14.45 6.12V10.69"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M7.36987 13.73H8.99987"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M11.1699 13.73H12.8099"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.98 13.73H16.62"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Meter
