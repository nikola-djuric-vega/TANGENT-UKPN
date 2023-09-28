import { BaseIconProps } from '_types/local'

const CircledSearch = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14.6501 18.6298C17.5717 18.6298 19.9401 16.2614 19.9401 13.3398C19.9401 10.4182 17.5717 8.0498 14.6501 8.0498C11.7285 8.0498 9.36011 10.4182 9.36011 13.3398C9.36011 16.2614 11.7285 18.6298 14.6501 18.6298Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.28 17.9697L22.59 21.2797"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 4.07983H21.93"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 12.6299H6.04"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 21.1799H6.04"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CircledSearch
