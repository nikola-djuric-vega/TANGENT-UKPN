import { BaseIconProps } from '_types/local'

const Torch = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M13.0757 15.2851L5.53145 22.8045C5.24305 23.0899 4.85364 23.25 4.44784 23.25C4.04203 23.25 3.65263 23.0899 3.36422 22.8045L1.197 20.6444C0.910769 20.3578 0.75 19.9694 0.75 19.5644C0.75 19.1594 0.910769 18.7709 1.197 18.4843L8.75415 10.952C8.76163 10.9446 8.77174 10.9404 8.78229 10.9404C8.79284 10.9404 8.80295 10.9446 8.81043 10.952L13.0757 15.2032C13.0811 15.2086 13.0853 15.215 13.0883 15.222C13.0912 15.229 13.0927 15.2366 13.0927 15.2442C13.0927 15.2518 13.0912 15.2593 13.0883 15.2664C13.0853 15.2734 13.0811 15.2798 13.0757 15.2851V15.2851Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0771 12.5441L13.1173 15.2443L8.78247 10.9243L11.4912 4.9837L19.0771 12.5441Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4932 4.98449C11.4932 4.98386 11.737 4.73884 12.035 4.44187L13.1167 3.36369C13.2609 3.22098 13.4556 3.14093 13.6585 3.14093C13.8614 3.14093 14.0561 3.22098 14.2003 3.36369L20.702 9.84397C20.8451 9.98726 20.9255 10.1815 20.9255 10.384C20.9255 10.5865 20.8451 10.7807 20.702 10.924L19.0918 12.5289C19.0878 12.5329 19.0823 12.5352 19.0766 12.5352C19.0709 12.5352 19.0654 12.5329 19.0614 12.5289"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.575 4.41876L21.7829 2.22034"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7788 6.62126L23.2501 5.88913"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3711 2.21629L18.1077 0.75"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Torch
