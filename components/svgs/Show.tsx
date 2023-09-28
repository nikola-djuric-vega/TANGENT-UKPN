import { BaseIconProps } from '_types/local'

const Show = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12.03 14.8899C13.2727 14.8899 14.28 13.8825 14.28 12.6399C14.28 11.3973 13.2727 10.3899 12.03 10.3899C10.7874 10.3899 9.78003 11.3973 9.78003 12.6399C9.78003 13.8825 10.7874 14.8899 12.03 14.8899Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.28 12.6399C20.28 17.8899 16.53 20.5199 12.03 20.5199C7.53003 20.5199 3.78003 17.8899 0.780029 12.6399C3.78003 7.38989 7.53003 4.75989 12.03 4.75989C16.53 4.75989 20.28 7.37989 23.28 12.6399Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Show
