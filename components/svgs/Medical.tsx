import { BaseIconProps } from '_types/local'

const Medical = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M4.3 2.96996H3.12C1.81 2.96996 0.75 4.02996 0.75 5.32996V9.46996C0.75 13.07 3.67 15.98 7.26 15.98C10.85 15.98 13.77 13.06 13.77 9.46996V5.32996C13.77 4.01996 12.71 2.95996 11.4 2.95996H10.22"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66992 15.9899C6.66992 19.9099 9.84992 23.0999 13.7799 23.0999C17.7099 23.0999 20.8899 19.9199 20.8899 15.9899V12.4399"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.22 1.77991V4.14991"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.30005 1.77991V4.14991"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.88 12.44C22.1889 12.44 23.25 11.3789 23.25 10.07C23.25 8.76104 22.1889 7.69995 20.88 7.69995C19.5711 7.69995 18.51 8.76104 18.51 10.07C18.51 11.3789 19.5711 12.44 20.88 12.44Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Medical
