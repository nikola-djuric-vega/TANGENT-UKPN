import { BaseIconProps } from '_types/local'

const Water = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14.6255 23.25C17.3846 24.83 20.8834 23.87 22.4729 21.07C23.5025 19.26 23.5025 17.02 22.4729 15.21L17.4645 7.38L16.225 9.32001"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.74976 11.66C-0.31955 15.3 0.910041 19.96 4.49885 22.06C8.08766 24.16 12.6661 22.91 14.7354 19.27C16.075 16.92 16.075 14.02 14.7354 11.66L8.2476 1.51001L1.74976 11.66Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Water
