import { BaseIconProps } from '_types/local'

const EightyPxRings = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 127.12 127.12"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <path d="M63.56 117.88a54.32 54.32 0 1 1 54.32-54.32 54.38 54.38 0 0 1-54.32 54.32zm0-104.64a50.32 50.32 0 1 0 50.32 50.32 50.38 50.38 0 0 0-50.32-50.32z" />
      <path d="M63.56 127.12a63.56 63.56 0 1 1 63.56-63.56 63.63 63.63 0 0 1-63.56 63.56zM63.56 2a61.56 61.56 0 1 0 61.56 61.56A61.63 61.63 0 0 0 63.56 2z" />
    </svg>
  )
}

export default EightyPxRings
