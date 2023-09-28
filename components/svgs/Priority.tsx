import { BaseIconProps } from '_types/local'

const Priority = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.64 1.38989H2.15004C1.39893 1.38989 0.790039 1.99879 0.790039 2.74989V5.56989C0.790039 6.321 1.39893 6.92989 2.15004 6.92989H10.64C11.3911 6.92989 12 6.321 12 5.56989V2.74989C12 1.99879 11.3911 1.38989 10.64 1.38989Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M14.19 9.86987H2.15004C1.39893 9.86987 0.790039 10.4788 0.790039 11.2299V14.0499C0.790039 14.801 1.39893 15.4099 2.15004 15.4099H14.19C14.9411 15.4099 15.55 14.801 15.55 14.0499V11.2299C15.55 10.4788 14.9411 9.86987 14.19 9.86987Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M18.14 18.3499H2.15004C1.39893 18.3499 0.790039 18.9587 0.790039 19.7099V22.5299C0.790039 23.281 1.39893 23.8899 2.15004 23.8899H18.14C18.8911 23.8899 19.5 23.281 19.5 22.5299V19.7099C19.5 18.9587 18.8911 18.3499 18.14 18.3499Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.75 5.31989L19.5 1.38989"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 14.5299V1.38989"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.25 5.31989L19.5 1.38989"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Priority
