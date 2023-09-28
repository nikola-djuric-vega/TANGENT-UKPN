import { BaseIconProps } from '_types/local'

const Jacuzzi = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.75 23.8899H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.52002 21.8599H16.48"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 12.9399H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.06006 23.9299V12.9399"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5901 23.8899V12.9399"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.52002 19.83H16.48"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.03 7.45996V8.29996C10.89 8.36996 10.61 8.51996 10.07 8.75996C9.21002 9.14996 8.53002 9.44996 8.22002 9.96996C8.03002 10.36 7.94002 12.13 7.97002 12.59"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4199 7.45996V8.29996C13.5599 8.36996 13.8399 8.51996 14.3799 8.75996C15.2399 9.14996 15.9199 9.44996 16.2299 9.96996C16.4199 10.36 16.5099 12.13 16.4799 12.59"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.01 5.78996C14.01 6.84996 13.21 7.91996 12.23 7.91996C11.25 7.91996 10.45 6.84996 10.45 5.78996V4.59996C10.45 4.12996 10.64 3.67996 10.97 3.34996C11.3 3.01996 11.76 2.82996 12.23 2.82996C12.7 2.82996 13.15 3.01996 13.49 3.34996C13.82 3.67996 14.01 4.12996 14.01 4.59996V5.78996Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6302 9.22988C21.0302 8.46988 21.0302 7.93988 20.9402 7.58988C20.8402 7.17988 20.6302 7.03988 20.5902 6.66988C20.5302 6.11988 20.9002 5.61988 21.2502 5.24988"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.02007 9.34987C3.42007 8.58987 3.42007 8.05987 3.33007 7.70987C3.23007 7.29987 3.02007 7.15987 2.98007 6.78987C2.92007 6.23987 3.29007 5.73987 3.64007 5.36987"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5602 6.8099C18.1002 5.7699 18.1002 5.0599 17.9902 4.5799C17.8502 4.0199 17.5702 3.8299 17.5102 3.3299C17.4302 2.5899 17.9302 1.8999 18.4102 1.3999"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06996 6.8099C6.60996 5.7699 6.60996 5.0599 6.49996 4.5799C6.35996 4.0199 6.07996 3.8299 6.01996 3.3299C5.93996 2.5899 6.43996 1.8999 6.91996 1.3999"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Jacuzzi
