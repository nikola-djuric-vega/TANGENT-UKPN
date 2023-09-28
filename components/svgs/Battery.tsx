import { BaseIconProps } from '_types/local'

const Battery = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M17.62 5.05994H19.03C20.58 5.05994 21.84 6.31994 21.84 7.86994V8.56994C21.84 8.95994 22.15 9.26994 22.54 9.26994C22.93 9.26994 23.24 9.57994 23.24 9.96994V14.1899C23.24 14.5799 22.93 14.8899 22.54 14.8899C22.15 14.8899 21.84 15.1999 21.84 15.5899V16.2899C21.84 17.8399 20.58 19.0999 19.03 19.0999H16.22"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.38 5.05994H3.56C2.01 5.05994 0.75 6.31994 0.75 7.86994V16.3099C0.75 17.8599 2.01 19.1199 3.56 19.1199H4.97"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9999 6.46991L9.18994 12.0899H13.4099L10.5999 17.7099"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Battery
