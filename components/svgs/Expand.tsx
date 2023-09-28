import { BaseIconProps } from '_types/local'

const Expand = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12 23.9299C18.2132 23.9299 23.25 18.8931 23.25 12.6799C23.25 6.46673 18.2132 1.42993 12 1.42993C5.7868 1.42993 0.75 6.46673 0.75 12.6799C0.75 18.8931 5.7868 23.9299 12 23.9299Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 12.6799H15.75"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.92993V16.4299"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Expand
