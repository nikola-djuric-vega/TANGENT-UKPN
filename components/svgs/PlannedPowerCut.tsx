import { BaseIconProps } from '_types/local'

const PlannedPowerCut = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M11.9949 11.9214L10.021 15.8793H13.9789L12.0052 19.8373"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.24138 2.30173H3.85345C3.0311 2.30413 2.24313 2.63188 1.66164 3.21336C1.08015 3.79485 0.752407 4.58283 0.75 5.40518V20.1466C0.752407 20.9689 1.08015 21.7569 1.66164 22.3384C2.24313 22.9199 3.0311 23.2476 3.85345 23.25H20.1466C20.9689 23.2476 21.7569 22.9199 22.3384 22.3384C22.9198 21.7569 23.2476 20.9689 23.25 20.1466V5.40518C23.2476 4.58283 22.9198 3.79485 22.3384 3.21336C21.7569 2.63188 20.9689 2.30413 20.1466 2.30173H19.7586"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4482 2.30173H13.5517"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.34473 0.75V3.85345"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6553 0.75V3.85345"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 8.57498H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PlannedPowerCut
