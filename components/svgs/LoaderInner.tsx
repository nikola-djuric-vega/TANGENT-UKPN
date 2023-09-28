import { BaseIconProps } from '_types/local'

const LoaderInner = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 74 74"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <title>Oval Copy</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M74,37 C74,16.5654643 57.4345357,0 37,0 C16.5654643,0 0,16.5654643 0,37 C0,57.4345357 16.5654643,74 37,74 C47.4020398,74 57.1151688,69.6839823 64.0694788,62.2240683 L62.6065589,60.8602995 C56.0267057,67.9185324 46.8414278,72 37,72 C17.6700338,72 2,56.3299662 2,37 C2,17.6700338 17.6700338,2 37,2 C56.3299662,2 72,17.6700338 72,37 L74,37 Z"
          id="Oval-Copy"
          fill="#EB0000"
          fillRule="nonzero"
          transform="translate(37.000000, 37.000000) rotate(-315.000000) translate(-37.000000, -37.000000) "
        />
      </g>
    </svg>
  )
}

export default LoaderInner
