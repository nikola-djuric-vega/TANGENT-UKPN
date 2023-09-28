import { BaseIconProps } from '_types/local'

const StepNumberThree = ({
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
        d="M8.3373 15.614C9.2053 16.594 10.3673 17.14 11.5853 17.14C13.6153 17.14 15.2393 15.754 15.2393 13.682C15.2393 12.198 14.3153 11.022 12.9713 10.504L14.7493 8.32V7.2H8.7993V8.88H12.0753L10.2413 11.05V12.17C10.6053 11.988 11.0253 11.89 11.4173 11.89C12.5093 11.89 13.3493 12.66 13.3493 13.682C13.3493 14.732 12.4393 15.46 11.5153 15.46C10.7733 15.46 10.1013 15.054 9.6953 14.48L8.3373 15.614Z"
        {...(baseColour && { fill: '#27187E' })}
      />
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="22.5"
        rx="11.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default StepNumberThree
