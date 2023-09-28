import { BaseIconProps } from '_types/local'

const List = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <rect
        x="1"
        y="12.5"
        width="1.5"
        height="1.5"
        rx="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M4 13.25C4 12.8358 4.33579 12.5 4.75 12.5H14.25C14.6642 12.5 15 12.8358 15 13.25C15 13.6642 14.6642 14 14.25 14H4.75C4.33579 14 4 13.6642 4 13.25Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <rect
        x="1"
        y="7"
        width="1.5"
        height="1.5"
        rx="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M4 7.75C4 7.33579 4.33579 7 4.75 7H10.25C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <rect
        x="1"
        y="2"
        width="1.5"
        height="1.5"
        rx="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M4 2.75C4 2.33579 4.33579 2 4.75 2H14.25C14.6642 2 15 2.33579 15 2.75C15 3.16421 14.6642 3.5 14.25 3.5H4.75C4.33579 3.5 4 3.16421 4 2.75Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default List
