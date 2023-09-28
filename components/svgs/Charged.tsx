import { BaseIconProps } from '_types/local'

const Charged = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.4299 20.41C15.406 20.41 19.4399 16.3761 19.4399 11.4C19.4399 6.42393 15.406 2.39001 10.4299 2.39001C5.45384 2.39001 1.41992 6.42393 1.41992 11.4C1.41992 16.3761 5.45384 20.41 10.4299 20.41Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M13.5798 23.13C18.6798 22.27 22.5798 17.42 22.5798 11.57C22.5798 10.01 22.2998 8.52003 21.7998 7.16003"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M13.58 15.11C12.58 15.57 11.42 15.57 10.42 15.11C9.36995 14.75 8.21995 14.86 7.25995 15.43C7.94995 15.19 8.43995 14.58 8.51995 13.85V9.11004C8.51995 7.71004 9.66995 6.59004 11.06 6.60004C11.95 6.60004 12.77 7.08004 13.22 7.85004M11.61 11.64H7.19995"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Charged
