import { BaseIconProps } from '_types/local'

const Compensation = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M21.0004 18.833V22.1626C21.0004 22.9001 20.3919 23.5 19.6384 23.5H4.7246C3.22736 23.5 2.01025 22.3101 2.01025 20.835V10.1989C2.01025 8.85159 3.12111 7.76001 4.50243 7.76001H19.6481C20.4015 7.76001 21.0101 8.35989 21.0101 9.09744V12.76"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2601 12.91V18.33H18.6301C17.0801 18.33 15.8201 17.12 15.8201 15.62C15.8201 14.12 17.0801 12.91 18.6301 12.91L22.2601 12.91Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.16992 5.70005L15.9699 2.68005C17.0699 2.15005 18.3599 2.92005 18.3599 4.11005V5.46005"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Compensation
