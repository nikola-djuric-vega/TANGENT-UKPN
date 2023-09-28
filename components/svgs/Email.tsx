import { BaseIconProps, IconType } from '_types/local'

const Email = ({
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
            d="M2.72912 8.32001H16.553C17.6425 8.32001 18.5321 9.21001 18.5321 10.31V21.26C18.5321 22.36 17.6525 23.25 16.553 23.25H2.72912C1.6396 23.25 0.75 22.36 0.75 21.26V10.31C0.75 9.21001 1.62961 8.32001 2.72912 8.32001Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.46777 5.94V2.74C5.46777 1.64 6.34738 0.75 7.44689 0.75H21.2708C22.3603 0.75 23.2499 1.64 23.2499 2.74V14.7C23.2499 15.8 22.3703 16.69 21.2708 16.69H20.9809"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.75 10.31L9.63605 16.27L18.5221 10.31"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M2.72912 8.32001H16.553C17.6425 8.32001 18.5321 9.21001 18.5321 10.31V21.26C18.5321 22.36 17.6525 23.25 16.553 23.25H2.72912C1.6396 23.25 0.75 22.36 0.75 21.26V10.31C0.75 9.21001 1.62961 8.32001 2.72912 8.32001Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.46777 5.94V2.74C5.46777 1.64 6.34738 0.75 7.44689 0.75H21.2708C22.3603 0.75 23.2499 1.64 23.2499 2.74V14.7C23.2499 15.8 22.3703 16.69 21.2708 16.69H20.9809"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.75 10.31L9.63605 16.27L18.5221 10.31"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default Email
