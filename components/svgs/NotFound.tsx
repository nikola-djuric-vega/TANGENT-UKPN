import { BaseIconProps, IconType } from '_types/local'

const NotFound = ({
  type = IconType.DEFAULT,
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  switch (type) {
    case IconType.LARGE:
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M3.43784 6.07068C2.58834 7.81105 2.30643 9.76955 2.63108 11.6753C2.95573 13.5811 3.87092 15.34 5.25006 16.7088L11.8655 23.25C11.8825 23.2332 14.4249 20.7771 16.3873 18.8817"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4449 14.1134C21.2973 12.3736 21.5807 10.4144 21.2558 8.50791C20.9309 6.60144 20.0138 4.84244 18.6319 3.47534C17.25 2.10824 15.472 1.20093 13.545 0.879503C11.6179 0.558074 9.63748 0.838483 7.87891 1.68177"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.57227 0.831055L21.4998 19.5562"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg
          viewBox="0 0 16 16"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M2.57673 4.1795C2.03487 5.30105 1.85504 6.56316 2.06213 7.79131C2.26921 9.01946 2.85297 10.153 3.73268 11.035L7.95242 15.2504C7.96323 15.2395 9.58498 13.6568 10.8367 12.4353"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...(baseColour && { stroke: '#27187E' })}
          />
          <path
            d="M13.4248 9.3625C13.9685 8.24134 14.1493 6.97874 13.942 5.75016C13.7348 4.52158 13.1498 3.38802 12.2684 2.50702C11.3869 1.62602 10.2528 1.04133 9.02359 0.834188C7.79439 0.62705 6.53115 0.807754 5.40942 1.35119"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...(baseColour && { stroke: '#27187E' })}
          />
          <path
            d="M2.02466 0.802856L14.0978 12.8699"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...(baseColour && { stroke: '#758BFD' })}
          />
        </svg>
      )
  }
}

export default NotFound
