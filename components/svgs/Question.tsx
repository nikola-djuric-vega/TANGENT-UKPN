import { BaseIconProps } from '_types/local'

const Question = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M9.27002 9.00994C9.27002 7.58994 10.61 6.43994 12.27 6.43994H13.13C14.79 6.43994 16.13 7.58994 16.13 9.00994C16.19 10.1499 15.49 10.8599 14.42 11.5799C14.1 11.7999 13.63 12.2099 13.22 12.8299C12.56 13.8199 12.71 15.6099 12.71 15.9799"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6899 18.4299V18.4399"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.55 23.6899C18.7633 23.6899 23.8 18.6531 23.8 12.4399C23.8 6.22674 18.7633 1.18994 12.55 1.18994C6.33685 1.18994 1.30005 6.22674 1.30005 12.4399C1.30005 18.6531 6.33685 23.6899 12.55 23.6899Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default Question
