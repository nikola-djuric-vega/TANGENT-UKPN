import { BaseIconProps } from '_types/local'

const Estimator = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M19.5 0.839966H4.5C3.11929 0.839966 2 1.95925 2 3.33997V20.84C2 22.2207 3.11929 23.34 4.5 23.34H19.5C20.8807 23.34 22 22.2207 22 20.84V3.33997C22 1.95925 20.8807 0.839966 19.5 0.839966Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.12 5.20996H7.88C7.11785 5.20996 6.5 5.82781 6.5 6.58996V7.94996C6.5 8.71211 7.11785 9.32996 7.88 9.32996H16.12C16.8822 9.32996 17.5 8.71211 17.5 7.94996V6.58996C17.5 5.82781 16.8822 5.20996 16.12 5.20996Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 14.84V14.85"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.84V14.85"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14.84V14.85"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18.96V18.98"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18.96V18.98"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 18.96V18.98"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Estimator
