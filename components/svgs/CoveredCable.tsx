import { BaseIconProps } from '_types/local'

const CoveredCable = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14.0301 14.9799C13.9201 14.5799 13.7601 13.7599 14.0901 12.7899C14.4001 11.8499 15.1801 11.6099 15.7001 10.6499C15.9601 10.1599 16.2201 9.40995 16.0901 8.31995"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1001 14.4399V10.0399"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0401 14.9799C10.2601 14.2799 10.4201 13.2299 9.8201 12.2099C9.3801 11.4599 8.8401 11.2499 8.3801 10.5299C7.9901 9.91993 7.6501 8.94993 8.1001 7.42993"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83008 16.9799V16.0099C8.83008 15.4799 9.30008 15.0599 9.88008 15.0599H14.3001C14.8801 15.0599 15.3501 15.4899 15.3501 16.0099V16.9799"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.38013 23.79V19.01C7.38013 18.22 8.02013 17.58 8.81013 17.58H15.2001C15.9901 17.58 16.6301 18.22 16.6301 19.01V23.79"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1 1.18994L10.45 4.30994H13.74L12.09 7.42994"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.88013 2.08997L6.08013 3.22997"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.77002 5.51001H5.37002"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.1199 2.59998L17.9199 3.73998"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2299 6.02002H18.6299"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CoveredCable
