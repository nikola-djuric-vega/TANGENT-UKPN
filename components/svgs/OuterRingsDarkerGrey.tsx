import { BaseIconProps } from '_types/local'

const OuterRingsDarkerGrey = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 126 127"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <g fill="none" fillRule="evenodd" stroke="#E4E4E4">
        <path
          strokeWidth="4"
          d="M114.881 63.559c0 28.895-23.426 52.322-52.322 52.322-28.898 0-52.323-23.427-52.323-52.322 0-28.897 23.425-52.322 52.323-52.322 28.896 0 52.322 23.425 52.322 52.322z"
        />
        <path
          strokeWidth="2"
          d="M125.118 63.559c0 34.55-28.01 62.559-62.56 62.559S.002 98.108.002 63.558 28.009 1 62.559 1s62.559 28.01 62.559 62.56z"
        />
      </g>
    </svg>
  )
}

export default OuterRingsDarkerGrey
