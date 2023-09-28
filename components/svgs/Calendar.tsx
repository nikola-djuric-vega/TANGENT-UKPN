import { BaseIconProps } from '_types/local'

const Calendar = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M20.16 4.03003H20.44C21.99 4.03003 23.25 5.15003 23.25 6.53003V21.53C23.25 22.91 21.99 24.03 20.44 24.03H3.56C2.01 24.03 0.75 22.91 0.75 21.53V6.53003C0.75 5.15003 2.01 4.03003 3.56 4.03003H4.14"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.22 1.53003V6.53003"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.78003 1.53003V6.53003"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9.84009H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6.5"
        cy="14.7273"
        r="0.75"
        {...(!!baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="12"
        cy="14.7273"
        r="0.75"
        {...(!!baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="17.5"
        cy="14.7273"
        r="0.75"
        {...(!!baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="6.5"
        cy="18.8098"
        r="0.75"
        {...(!!baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="12"
        cy="18.8098"
        r="0.75"
        {...(!!baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="17.5"
        cy="18.8098"
        r="0.75"
        {...(!!baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default Calendar
