import { BaseIconProps } from '_types/local'

const EarthLoop = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M18.0301 1.12H5.71012C4.14163 1.12 2.87012 2.39151 2.87012 3.96V20.78C2.87012 22.3485 4.14163 23.62 5.71012 23.62H18.0301C19.5986 23.62 20.8701 22.3485 20.8701 20.78V3.96C20.8701 2.39151 19.5986 1.12 18.0301 1.12Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7802 20.8C14.4643 20.8 16.6402 18.6241 16.6402 15.94C16.6402 13.2559 14.4643 11.08 11.7802 11.08C9.09606 11.08 6.92017 13.2559 6.92017 15.94C6.92017 18.6241 9.09606 20.8 11.7802 20.8Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.76 13.16V15.94"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.99 4.46997H7.68005C6.77982 4.46997 6.05005 5.19975 6.05005 6.09997V6.42997C6.05005 7.33019 6.77982 8.05997 7.68005 8.05997H15.99C16.8903 8.05997 17.62 7.33019 17.62 6.42997V6.09997C17.62 5.19975 16.8903 4.46997 15.99 4.46997Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EarthLoop
