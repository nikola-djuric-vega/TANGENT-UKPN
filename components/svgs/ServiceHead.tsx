import { BaseIconProps } from '_types/local'

const ServiceHead = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M21.5699 1.38989H10.9099C9.96001 1.38989 9.18994 2.15996 9.18994 3.10989V12.7399C9.18994 13.6898 9.96001 14.4599 10.9099 14.4599H21.5699C22.5199 14.4599 23.2899 13.6898 23.2899 12.7399V3.10989C23.2899 2.15996 22.5199 1.38989 21.5699 1.38989Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M20.04 3.54993H12.25C11.7032 3.54993 11.26 3.99316 11.26 4.53993V11.3099C11.26 11.8567 11.7032 12.2999 12.25 12.2999H20.04C20.5868 12.2999 21.03 11.8567 21.03 11.3099V4.53993C21.03 3.99316 20.5868 3.54993 20.04 3.54993Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M14.9199 16.2V18.72"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.18994 18.8699H14.9199"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.5499 16.2V19.14V21.65H9.18994"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1099 6.86987H15.3199"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M16.9399 6.86987H18.1499"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.21002 14.4598H2.51002C1.96326 14.4598 1.52002 14.9031 1.52002 15.4498V22.8998C1.52002 23.4466 1.96326 23.8898 2.51002 23.8898H6.21002C6.75678 23.8898 7.20002 23.4466 7.20002 22.8998V15.4498C7.20002 14.9031 6.75678 14.4598 6.21002 14.4598Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M0.790039 18.1199V19.9999"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default ServiceHead
