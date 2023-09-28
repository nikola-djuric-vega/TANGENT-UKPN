import { BaseIconProps } from '_types/local'

const Global = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12.6599 19.4999C12.5399 19.5399 12.4199 19.5699 12.2899 19.5999C7.32993 20.8299 2.28993 17.7299 1.02993 12.6799C-0.220073 7.62994 2.78993 2.52994 7.74993 1.29994C7.90993 1.25994 8.07993 1.21994 8.23993 1.18994"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4501 17.76C14.5039 17.76 17.7901 14.4737 17.7901 10.42C17.7901 6.36619 14.5039 3.07996 10.4501 3.07996C6.39634 3.07996 3.11011 6.36619 3.11011 10.42C3.11011 14.4737 6.39634 17.76 10.4501 17.76Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9708 17.302C13.6692 16.9252 14.3633 13.5426 13.5211 9.74686C12.6789 5.95109 10.6193 3.17949 8.92092 3.55633C7.22252 3.93316 6.52844 7.31573 7.37064 11.1115C8.21284 14.9073 10.2724 17.6789 11.9708 17.302Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.34009 12.03L17.6501 8.82996"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1899 20.6899V21.5899"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.14999 21.7599H12.23C13.15 21.7599 13.89 22.4999 13.89 23.4199V23.6899H6.48999V23.4199C6.48999 22.4999 7.22999 21.7599 8.14999 21.7599Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Global
