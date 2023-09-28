import { BaseIconProps } from '_types/local'

const StepNumberTwo = ({
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
        d="M10.5515 9.846C10.7475 9.188 11.2235 8.74 11.8815 8.74C12.6235 8.74 13.1555 9.37 13.1555 10.056C13.1555 10.56 12.9455 11.12 12.1895 11.974L8.74555 15.88V17H15.1155V15.32H11.6995L13.7855 12.898C14.4435 12.142 15.0455 11.274 15.0455 10.084C15.0455 8.32 13.5895 7.06 11.9095 7.06C10.4675 7.06 9.23555 7.984 8.81555 9.328L10.5515 9.846Z"
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

export default StepNumberTwo
