import { BaseIconProps } from '_types/local'

const More = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <rect
        x="2"
        y="7"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <rect
        x="12"
        y="7"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <rect
        x="7"
        y="7"
        width="2"
        height="2"
        rx="1"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default More
