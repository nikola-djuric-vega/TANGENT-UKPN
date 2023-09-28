import { BaseIconProps } from '_types/local'

const Target = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M11.0701 14.17L15.3901 9.46997"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.44 1.18994L14.7 5.04994L15.39 9.46994L19.83 10.0299L23.57 6.16994L19.27 5.39994L18.44 1.18994Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8401 9.28992C12.2501 9.05992 11.6101 8.91992 10.9301 8.91992C7.97007 8.91992 5.57007 11.3199 5.57007 14.2799C5.57007 17.2399 7.97007 19.6399 10.9301 19.6399C13.8901 19.6399 16.2901 17.2399 16.2901 14.2799C16.2901 13.4699 16.0901 12.6999 15.7701 12.0099"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.67 5.04988C12.1 4.93988 11.52 4.87988 10.93 4.87988C5.74003 4.87988 1.53003 9.08988 1.53003 14.2899C1.53003 19.4899 5.74003 23.6899 10.93 23.6899C16.12 23.6899 20.33 19.4799 20.33 14.2899C20.33 13.5299 20.23 12.7899 20.06 12.0799"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Target
