import { BaseIconProps } from '_types/local'

const Maintanance = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M22.15 2.85997C22.84 3.73997 23.25 4.84997 23.25 6.04997C23.25 8.92997 20.91 11.26 18.02 11.26C17.59 11.26 17.17 11.21 16.77 11.11L6.34 22.23C6.34 22.23 3.89 24.66 1.7 22.32C-0.489997 19.98 1.82 17.68 1.82 17.68L12.95 7.27997C12.85 6.88997 12.8 6.46997 12.8 6.04997C12.8 3.16997 15.14 0.839966 18.03 0.839966C18.84 0.839966 19.6 1.01997 20.28 1.34997L18.785 3.03997L17.29 4.72997L19.03 6.43997L22.16 2.85997H22.15Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0199 6.43997L14.6799 2.21997"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91992 17.1099L13.2299 10.8099"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.13008 20.95C4.70998 20.95 5.18008 20.4799 5.18008 19.9C5.18008 19.3201 4.70998 18.85 4.13008 18.85C3.55018 18.85 3.08008 19.3201 3.08008 19.9C3.08008 20.4799 3.55018 20.95 4.13008 20.95Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Maintanance
