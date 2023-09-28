import { BaseIconProps } from '_types/local'

const Unsubscribe = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M6.37524 21.0518C6.78945 21.0518 7.12523 20.716 7.12523 20.3018C7.12523 19.8876 6.78945 19.5518 6.37524 19.5518C5.96103 19.5518 5.62524 19.8876 5.62524 20.3018C5.62524 20.716 5.96103 21.0518 6.37524 21.0518Z"
        {...(baseColour && { fill: '#27187E' })}
      />
      <path
        d="M21.75 0.75H9.75C9.35254 0.751167 8.97168 0.909578 8.69063 1.19063C8.40958 1.47168 8.25117 1.85254 8.25 2.25V10.5C8.25119 10.8975 8.40961 11.2783 8.69065 11.5594C8.9717 11.8404 9.35254 11.9988 9.75 12H15V15L19.5 12H21.75C22.1475 11.9989 22.5283 11.8404 22.8094 11.5594C23.0904 11.2783 23.2488 10.8975 23.25 10.5V2.25C23.2489 1.85253 23.0905 1.47166 22.8094 1.1906C22.5283 0.909539 22.1475 0.751138 21.75 0.75V0.75Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.24949 5.25H2.25C1.85254 5.25117 1.47169 5.40958 1.19063 5.69063C0.909581 5.97167 0.751171 6.35252 0.75 6.74999V21.75C0.751183 22.1475 0.909596 22.5283 1.19065 22.8094C1.4717 23.0904 1.85254 23.2488 2.25 23.25H10.5C10.8975 23.2489 11.2783 23.0905 11.5594 22.8094C11.8405 22.5283 11.9989 22.1475 12 21.75V14.9999"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 4.10612L13.5 8.60612"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 4.10612L18 8.60612"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Unsubscribe
