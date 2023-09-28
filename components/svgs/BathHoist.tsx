import { BaseIconProps } from '_types/local'

const BathHoist = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M15.8601 3.29989C15.8801 2.19989 16.7501 1.32989 17.7501 1.38989C18.7401 1.44989 19.5101 2.38989 19.4501 3.47989V10.0599"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M22.26 10.0599H1.74C1.19324 10.0599 0.75 10.5032 0.75 11.0499V11.5899C0.75 12.1367 1.19324 12.5799 1.74 12.5799H22.26C22.8068 12.5799 23.25 12.1367 23.25 11.5899V11.0499C23.25 10.5032 22.8068 10.0599 22.26 10.0599Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M17.87 20.8398H6.13C3.99 20.8398 2.25 19.0998 2.25 16.9598V12.5898H21.75V16.9598C21.75 19.0998 20.01 20.8398 17.87 20.8398Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M5.58008 23.8899L7.24008 21.3099"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M19.4199 23.8099L17.8999 21.3899"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default BathHoist
