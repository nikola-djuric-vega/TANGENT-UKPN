import { BaseIconProps } from '_types/local'

const LoaderOuter = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 92 92"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        fillOpacity="0"
      >
        <path
          d="M91,46 C91,21.1471863 70.8528137,1 46,1 C21.1471863,1 1,21.1471863 1,46 C1,70.8528137 21.1471863,91 46,91 L46,91 C58.9974087,91 70.7078133,85.4896799 78.9225236,76.6777299"
          id="Oval"
          stroke="#EB0000"
          strokeWidth="2"
          fill="#D8D8D8"
        />
      </g>
    </svg>
  )
}

export default LoaderOuter
