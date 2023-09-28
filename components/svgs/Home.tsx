import { BaseIconProps } from '_types/local'

const Home = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M0.75 12.09L12 0.839966L23.25 12.09"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25012 9.75L3.25012 21.9499C3.25012 22.7199 3.21012 23.3399 4.59012 23.3399H19.5301C20.9101 23.3399 20.7501 22.7199 20.7501 21.9499V9.75"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 12.09H9.5V17.09H14.5V12.09Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Home
