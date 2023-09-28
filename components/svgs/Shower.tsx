import { BaseIconProps } from '_types/local'

const Shower = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M20.3099 15.77C20.3099 10.84 16.5899 6.84998 11.9999 6.84998C7.40994 6.84998 3.68994 10.85 3.68994 15.77H20.3099Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.12 6.84995V3.56995C12.12 1.73995 11.29 1.46995 10.53 1.39995C9.55002 1.29995 8.53002 2.17995 8.52002 3.40995H0.77002"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.01001 15.7699H21.98"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6.39 20.14C6.88153 20.14 7.28 19.7415 7.28 19.25C7.28 18.7585 6.88153 18.36 6.39 18.36C5.89847 18.36 5.5 18.7585 5.5 19.25C5.5 19.7415 5.89847 20.14 6.39 20.14Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M12.0001 20.14C12.4916 20.14 12.8901 19.7415 12.8901 19.25C12.8901 18.7585 12.4916 18.36 12.0001 18.36C11.5086 18.36 11.1101 18.7585 11.1101 19.25C11.1101 19.7415 11.5086 20.14 12.0001 20.14Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M14.43 23.89C14.9216 23.89 15.32 23.4915 15.32 23C15.32 22.5085 14.9216 22.11 14.43 22.11C13.9385 22.11 13.54 22.5085 13.54 23C13.54 23.4915 13.9385 23.89 14.43 23.89Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M9.52989 23.89C10.0214 23.89 10.4199 23.4915 10.4199 23C10.4199 22.5085 10.0214 22.11 9.52989 22.11C9.03836 22.11 8.63989 22.5085 8.63989 23C8.63989 23.4915 9.03836 23.89 9.52989 23.89Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M17.6 20.14C18.0915 20.14 18.49 19.7415 18.49 19.25C18.49 18.7585 18.0915 18.36 17.6 18.36C17.1084 18.36 16.71 18.7585 16.71 19.25C16.71 19.7415 17.1084 20.14 17.6 20.14Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default Shower
