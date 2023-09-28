import { BaseIconProps, IconType } from '_types/local'

const Circle = ({
  className,
  size,
  flip,
  type = IconType.DEFAULT,
}: BaseIconProps) => {
  switch (type) {
    case IconType.LARGE:
      return (
        <svg
          viewBox="0 0 60 60"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <circle cx="30" cy="30" r="30" />
        </svg>
      )
    default:
      return (
        <svg
          viewBox="0 0 26 26"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <circle cx="13" cy="13" r="13" />
        </svg>
      )
  }
}

export default Circle
