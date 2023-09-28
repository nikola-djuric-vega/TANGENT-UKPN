import { BaseIconProps } from '_types/local'

const SubstationGrafitti = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.780029 4.89003C1.08003 4.27003 2.84003 0.320026 4.95003 1.27003C7.26003 2.31003 7.37003 6.00003 8.75003 6.68003C10.73 7.65003 10.91 2.99003 12.54 3.68003"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M21.2801 22.94L17.7101 23.58C16.4001 23.82 15.1501 22.92 14.9201 21.58L12.9401 10.09C12.7101 8.75002 13.5901 7.46002 14.9001 7.23002L18.4701 6.59002C19.7801 6.35002 21.0301 7.25002 21.2601 8.59002L23.2401 20.08C23.4701 21.42 22.5901 22.71 21.2801 22.94Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M13.8101 7.24004L13.7801 7.09004C13.6401 6.26004 14.1601 5.47004 14.9401 5.33004L17.8001 4.82004C18.5801 4.68004 19.3301 5.24004 19.4801 6.07004L19.5101 6.22004"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M17.2901 4.84006L15.4301 5.17007L15.1401 3.47006C15.1001 3.25006 15.2401 3.04007 15.4601 3.01007L16.5501 2.81007C16.7601 2.77007 16.9701 2.92007 17.0001 3.13007L17.2901 4.83007V4.84006Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M13.4302 12.2201C15.8902 13.1801 17.0802 12.8501 17.7102 12.3401C18.2902 11.8701 18.4802 11.1601 19.3302 10.7801C20.0902 10.4401 20.8702 10.5701 21.4102 10.7301"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M14.0601 15.21C14.6301 15.19 15.4401 15.26 16.2101 15.74C17.5401 16.58 17.5601 17.93 18.5101 18.42C19.1601 18.76 20.3001 18.7 22.4101 16.98"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default SubstationGrafitti
