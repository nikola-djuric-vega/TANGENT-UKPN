import { BaseIconProps } from '_types/local'

const Boiler = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M17.6201 1.18994H6.38009C5.25009 1.18994 4.34009 2.09994 4.34009 3.22994V19.5699C4.34009 20.6999 5.25009 21.6099 6.38009 21.6099H17.6101C18.7401 21.6099 19.6501 20.6999 19.6501 19.5699V3.22994C19.6501 2.09994 18.7401 1.18994 17.6101 1.18994H17.6201Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.39014 21.6899V23.6899"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6101 21.6899V23.6899"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3102 10.8399C12.4402 9.99994 12.0002 9.19994 11.7402 8.93994C11.7402 9.71994 11.2802 10.1599 10.9602 10.4799C10.6402 10.7999 10.4402 11.3099 10.4402 11.7699C10.4402 12.6199 11.1402 13.3099 12.0002 13.3099C12.8602 13.3099 13.5602 12.6199 13.5602 11.7699C13.5602 11.3799 13.2902 10.7599 13.0402 10.4799C12.8902 10.7099 12.4802 10.9599 12.3102 10.8399Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="4"
        y1="5.25"
        x2="20"
        y2="5.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
      <line
        x1="8.75"
        y1="17.25"
        x2="15.25"
        y2="17.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default Boiler
