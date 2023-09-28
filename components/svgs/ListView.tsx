import { BaseIconProps } from '_types/local'

const ListView = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M3.51001 13.3943H7.54001"
        {...(baseColour ? { stroke: '#758BFD' } : { stroke: 'currentColor' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51001 18.7243H11.87"
        {...(baseColour ? { stroke: '#758BFD' } : { stroke: 'currentColor' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51001 24.1743H15.59"
        {...(baseColour ? { stroke: '#758BFD' } : { stroke: 'currentColor' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="0.75"
        cy="24.1743"
        r="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="0.75"
        cy="18.7143"
        r="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <circle
        cx="0.75"
        cy="13.3743"
        r="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M21.2801 3.76433C18.6501 0.994328 14.3801 0.994328 11.7501 3.76433C9.12009 6.53433 9.12009 11.0143 11.7501 13.7743L16.4601 18.7243L21.2801 13.7843C23.9101 11.0143 23.9201 6.52433 21.2801 3.76433ZM16.5101 11.4343C15.1101 11.4343 13.9801 10.2443 13.9801 8.77433C13.9801 7.30433 15.1101 6.11433 16.5101 6.11433C17.9101 6.11433 19.0401 7.30433 19.0401 8.77433C19.0401 10.2443 17.9101 11.4343 16.5101 11.4343Z"
        {...(baseColour ? { stroke: '#27187E' } : { stroke: 'currentColor' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ListView
