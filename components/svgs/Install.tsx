import { BaseIconProps } from '_types/local'

const Install = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M8.75 20.25H2.75C1.64543 20.25 0.75 19.3546 0.75 18.25V2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H21.25C22.3546 0.75 23.25 1.64543 23.25 2.75V18.25C23.25 19.3546 22.3546 20.25 21.25 20.25H15.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4937 1L10.5062 7"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4937 1L13.5062 7"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.33887L11 11H13L12 12.6611"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9937 15L12.0062 23.25"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7H9C8.44772 7 8 7.44772 8 8V14C8 14.5523 8.44772 15 9 15H15C15.5523 15 16 14.5523 16 14V8C16 7.44772 15.5523 7 15 7Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Install
