import { BaseIconProps } from '_types/local'

const Updates = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M23.28 11.2299C22.41 4.98989 16.66 0.639892 10.43 1.49989C6.44003 2.05989 3.03003 4.68989 1.48003 8.40989M0.780029 2.77989V8.40989H6.41003"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.780029 14.0499C1.65003 20.2899 7.40003 24.6499 13.63 23.7799C17.62 23.2199 21.03 20.5899 22.58 16.8699M23.28 22.4999V16.8699H17.66"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Updates
