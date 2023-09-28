import { BaseIconProps } from '_types/local'

const ElectricCar = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M6.39008 21.12C7.66586 21.12 8.70008 20.0858 8.70008 18.81C8.70008 17.5342 7.66586 16.5 6.39008 16.5C5.1143 16.5 4.08008 17.5342 4.08008 18.81C4.08008 20.0858 5.1143 21.12 6.39008 21.12Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6301 21.12C19.9058 21.12 20.9401 20.0858 20.9401 18.81C20.9401 17.5342 19.9058 16.5 18.6301 16.5C17.3543 16.5 16.3201 17.5342 16.3201 18.81C16.3201 20.0858 17.3543 21.12 18.6301 21.12Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.84 7.41003C15.42 7.41003 15.97 7.66003 16.36 8.08003L19.79 11.88H20.94C22.21 11.88 23.25 12.91 23.25 14.19V18.81H20.94M4.08 18.81L0.75 18.88V13.36C0.75 12.46 1.11 11.6 1.75 10.97L4.76 8.01003C5.15 7.63003 5.68 7.41003 6.22 7.41003M16.33 18.8H9.41"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4 4.40002L9.03003 9.15002H12.59L10.22 13.9"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ElectricCar
