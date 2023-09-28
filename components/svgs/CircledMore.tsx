import { BaseIconProps } from '_types/local'

const CircledMore = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <circle
        cx="12"
        cy="12.6799"
        r="11.25"
        {...(baseColour ? { stroke: '#27187E' } : { stroke: 'currentColor' })}
        strokeWidth="1.5"
      />
      <rect
        x="6"
        y="11.6799"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <rect
        x="16"
        y="11.6799"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <rect
        x="11"
        y="11.6799"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default CircledMore
