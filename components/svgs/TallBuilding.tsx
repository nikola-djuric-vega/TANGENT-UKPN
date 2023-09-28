import { BaseIconProps } from '_types/local'

const TallBuilding = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.75 23.6899H23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.65002 6.1599C8.99796 6.1599 9.28002 5.87784 9.28002 5.5299C9.28002 5.18196 8.99796 4.8999 8.65002 4.8999C8.30208 4.8999 8.02002 5.18196 8.02002 5.5299C8.02002 5.87784 8.30208 6.1599 8.65002 6.1599Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M8.65002 10.2499C8.99796 10.2499 9.28002 9.96781 9.28002 9.61987C9.28002 9.27193 8.99796 8.98987 8.65002 8.98987C8.30208 8.98987 8.02002 9.27193 8.02002 9.61987C8.02002 9.96781 8.30208 10.2499 8.65002 10.2499Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M8.65002 14.3299C8.99796 14.3299 9.28002 14.0479 9.28002 13.6999C9.28002 13.352 8.99796 13.0699 8.65002 13.0699C8.30208 13.0699 8.02002 13.352 8.02002 13.6999C8.02002 14.0479 8.30208 14.3299 8.65002 14.3299Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M8.65002 18.4199C8.99796 18.4199 9.28002 18.1379 9.28002 17.7899C9.28002 17.442 8.99796 17.1599 8.65002 17.1599C8.30208 17.1599 8.02002 17.442 8.02002 17.7899C8.02002 18.1379 8.30208 18.4199 8.65002 18.4199Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M3.93994 23.6899V3.68994C3.93994 2.30994 4.93994 1.18994 6.17994 1.18994H11.1299C12.3699 1.18994 13.3699 2.30994 13.3699 3.68994"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.03 23.68V6.63C12.03 5.45 12.88 4.5 13.94 4.5H18.16C19.21 4.5 20.07 5.45 20.07 6.63V23.68"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.05 14.73H17.22"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.05 12.4399H17.22"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M15.05 10.1499H17.22"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default TallBuilding
