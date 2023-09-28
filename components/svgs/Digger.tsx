import { BaseIconProps } from '_types/local'

const Digger = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M4.31006 17.1699V19.7499"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4299 17.1699V19.0399"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12012 7.87V12.26H15.7401"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.82 17.17H2.31002C1.73002 17.17 1.27002 16.74 1.27002 16.21V8.54998C1.27002 8.01998 1.74002 7.58998 2.31002 7.58998L10.72 7.47998L15.73 12.25L15.87 16.2C15.87 16.73 15.4 17.16 14.83 17.16L14.82 17.17Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 7.80005L14.5299 1.18994L20 6.30005"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.68 19.75H2.6C1.57827 19.75 0.75 20.5783 0.75 21.6V21.84C0.75 22.8617 1.57827 23.69 2.6 23.69H14.68C15.7017 23.69 16.53 22.8617 16.53 21.84V21.6C16.53 20.5783 15.7017 19.75 14.68 19.75Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.73 23.69C3.82352 23.69 4.71 22.808 4.71 21.72C4.71 20.632 3.82352 19.75 2.73 19.75C1.63648 19.75 0.75 20.632 0.75 21.72C0.75 22.808 1.63648 23.69 2.73 23.69Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.63 23.69C15.6793 23.69 16.53 22.808 16.53 21.72C16.53 20.632 15.6793 19.75 14.63 19.75C13.5806 19.75 12.73 20.632 12.73 21.72C12.73 22.808 13.5806 23.69 14.63 23.69Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.37 4.53992C23.62 5.91992 23.53 8.06992 22.18 9.34992C20.83 10.6299 18.71 10.5299 17.46 9.14992L22.38 4.53992H22.37Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Digger
