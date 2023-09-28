import { BaseIconProps } from '_types/local'

const People = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M5.75352 7.5557C6.65571 7.55477 7.5206 7.19561 8.15805 6.55717C8.7955 5.91874 9.15333 5.05329 9.15287 4.1511C9.1524 3.24891 8.79369 2.38383 8.15558 1.74605C7.51747 1.10827 6.65221 0.75 5.75002 0.75C4.84783 0.75 3.98257 1.10827 3.34446 1.74605C2.70635 2.38383 2.34763 3.24891 2.34717 4.1511C2.3467 5.05329 2.70453 5.91874 3.34198 6.55717C3.97944 7.19561 4.84433 7.55477 5.74652 7.5557H5.75352Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(baseColour && { stroke: '#27187E' })}
      />
      <path
        d="M0.75 15.25V12.25C0.751551 11.72 0.962761 11.2122 1.3375 10.8375C1.71223 10.4628 2.22004 10.2516 2.75 10.25H8.75C9.27996 10.2516 9.78776 10.4628 10.1625 10.8375C10.5372 11.2122 10.7484 11.72 10.75 12.25V15.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(baseColour && { stroke: '#27187E' })}
      />
      <path
        d="M10.0215 7.45703C10.3159 7.55907 10.6249 7.61306 10.9365 7.61694H10.9425C11.7205 7.61694 12.4666 7.30788 13.0168 6.75775C13.5669 6.20762 13.876 5.46148 13.876 4.68347C13.876 3.90547 13.5669 3.15933 13.0168 2.60919C12.4666 2.05906 11.7205 1.75 10.9425 1.75C10.8271 1.75471 10.7121 1.76637 10.5981 1.78491"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(baseColour && { stroke: '#758BFD' })}
      />
      <path
        d="M15.25 14.25V11.6638C15.2487 11.2069 15.0666 10.7691 14.7435 10.4461C14.4205 10.123 13.9827 9.94096 13.5259 9.93964H11.9878"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(baseColour && { stroke: '#758BFD' })}
      />
    </svg>
  )
}

export default People
