import { BaseIconProps } from '_types/local'

const Promotion = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M9.07 15.6199L10.21 21.1299C10.34 21.7399 9.98 22.3299 9.41 22.4399L8.39 22.6499C7.83 22.7699 7.27 22.3699 7.14 21.7599L6 16.2499"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.74996 8.58985L13.52 3.47985C13.84 3.04985 14.43 2.98985 14.84 3.33985C15.01 3.48985 15.14 3.69985 15.18 3.92985L17.94 17.3298C18.05 17.8798 17.73 18.4098 17.22 18.5098C17 18.5498 16.78 18.5098 16.58 18.3998L11.1 15.1998L2.91996 16.8898C2.35996 17.0098 1.79996 16.6098 1.66996 15.9998L0.75996 11.5898C0.62996 10.9798 0.98996 10.3898 1.55996 10.2798L9.73996 8.58985"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.03 8.0299L21.32 5.0199"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0601 9.90988L23.2501 9.24988"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.1701 13.9799L19.8701 12.1299"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Promotion
