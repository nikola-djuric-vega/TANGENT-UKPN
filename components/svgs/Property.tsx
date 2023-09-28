import { BaseIconProps } from '_types/local'

const Property = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M9.8479 7.43103V2.00001C9.84765 1.66909 9.97877 1.35144 10.2128 1.11612C10.328 1.00025 10.4651 0.908229 10.6163 0.845387C10.7675 0.782546 10.9297 0.750126 11.0936 0.75H22.0042C22.1681 0.750122 22.3303 0.78254 22.4815 0.845382C22.6327 0.908223 22.7698 1.00024 22.885 1.11612C23.119 1.35145 23.2501 1.66909 23.2499 2.00001V23.25H16.377"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.92822 18.1707V23.2497"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8897 7.42457C19.5361 7.42457 20.0601 6.90352 20.0601 6.26077C20.0601 5.61803 19.5361 5.09698 18.8897 5.09698C18.2433 5.09698 17.7192 5.61803 17.7192 6.26077C17.7192 6.90352 18.2433 7.42457 18.8897 7.42457Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M18.8897 12.0797C19.5361 12.0797 20.0601 11.5587 20.0601 10.916C20.0601 10.2732 19.5361 9.75216 18.8897 9.75216C18.2433 9.75216 17.7192 10.2732 17.7192 10.916C17.7192 11.5587 18.2433 12.0797 18.8897 12.0797Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M18.8897 16.7349C19.5361 16.7349 20.0601 16.2139 20.0601 15.5711C20.0601 14.9284 19.5361 14.4073 18.8897 14.4073C18.2433 14.4073 17.7192 14.9284 17.7192 15.5711C17.7192 16.2139 18.2433 16.7349 18.8897 16.7349Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M14.2081 7.42457C14.8545 7.42457 15.3785 6.90352 15.3785 6.26077C15.3785 5.61803 14.8545 5.09698 14.2081 5.09698C13.5616 5.09698 13.0376 5.61803 13.0376 6.26077C13.0376 6.90352 13.5616 7.42457 14.2081 7.42457Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M13.2348 23.25H0.75V14.4052L6.99241 8.50862L13.2348 14.4052V23.25Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Property