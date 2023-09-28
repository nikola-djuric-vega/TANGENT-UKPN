import { BaseIconProps } from '_types/local'

const WarningAlert = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12.01 8.61V14.34"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25989 22.25H20.7699C22.1499 22.25 23.2599 21.09 23.2499 19.67C23.2499 19.35 23.1899 19.03 23.0699 18.73L14.1899 3.07C13.5199 1.83 11.9999 1.39 10.7899 2.07C10.3799 2.3 10.0399 2.65 9.80989 3.07L0.929893 18.73C0.409893 20.04 1.02989 21.53 2.30989 22.06C2.56989 22.17 2.83989 22.23 3.11989 22.24"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12.02"
        cy="17.52"
        r="0.75"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default WarningAlert
