import { BaseIconProps } from '_types/local'

const Hotel = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.75 6.05994V19.8099M0.75 14.8099H23.25M23.25 19.8099V9.81994C23.25 8.43994 22.13 7.31994 20.75 7.31994H10.75V14.8199"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 11.0699C6.44036 11.0699 7 10.5103 7 9.81995C7 9.12959 6.44036 8.56995 5.75 8.56995C5.05964 8.56995 4.5 9.12959 4.5 9.81995C4.5 10.5103 5.05964 11.0699 5.75 11.0699Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hotel
