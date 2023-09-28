import { BaseIconProps } from '_types/local'

const HouseLight = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.2601 12.5601C10.0401 12.7801 9.86006 13.0501 9.74006 13.3401C9.62006 13.6301 9.56006 13.9401 9.56006 14.2601C9.56006 14.5801 9.62006 14.8901 9.74006 15.1801C9.86006 15.4701 10.0401 15.7301 10.2601 15.9601C10.7101 16.4101 11.3301 16.6601 11.9701 16.6601C12.6101 16.6601 13.2201 16.4101 13.6801 15.9601C13.9001 15.7401 14.0801 15.4701 14.2001 15.1801C14.3201 14.8901 14.3801 14.5801 14.3801 14.2601C14.3801 13.9401 14.3201 13.6301 14.2001 13.3401C14.0801 13.0501 13.9001 12.7901 13.6801 12.5601C13.2901 12.1401 12.9901 11.6401 12.8101 11.1001H11.1401C10.9601 11.6401 10.6601 12.1401 10.2701 12.5601H10.2601Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8401 19.8201V18.7601"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9501 18.0801L15.1401 17.3901"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6601 14.4501H16.6001"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.63007 17.4001L7.82007 18.0901"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.34009 14.3301H7.40009"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7799 8.51001H11.1399"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.8101V2.6001"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 12.76L12 1.51001L23.25 12.76"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25012 11.42V22.62C3.25012 23.39 3.21012 24.01 4.59012 24.01H19.5301C20.9101 24.01 20.7501 23.39 20.7501 22.62V11.42"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HouseLight
