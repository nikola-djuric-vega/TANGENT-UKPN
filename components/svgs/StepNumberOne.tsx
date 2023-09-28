import { BaseIconProps } from '_types/local'

const StepNumberOne = ({
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
        d="M9.79637 10.392V8.6L12.1764 7.2H13.5064V17H11.6164V9.384L9.79637 10.392Z"
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

export default StepNumberOne
