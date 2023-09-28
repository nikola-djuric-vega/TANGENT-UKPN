import { BaseIconProps } from '_types/local'

const CheckboxChecked = ({
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
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="22.5"
        rx="2"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
      <path
        d="M6 12L10 16L18 8"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CheckboxChecked
