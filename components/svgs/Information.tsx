import { BaseIconProps } from '_types/local'

const Information = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <rect
        x="0.75"
        y="0.75"
        width="14.5"
        height="14.5"
        rx="7.25"
        strokeWidth="1.5"
        {...(baseColour ? { stroke: '#27187E' } : { stroke: 'currentColor' })}
      />
      <path
        d="M6.71094 7.03336H7.99983V11.5445H9.28872"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(baseColour ? { stroke: '#758BFD' } : { stroke: 'currentColor' })}
      />
      <circle
        cx="8"
        cy="4.25"
        r="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default Information
