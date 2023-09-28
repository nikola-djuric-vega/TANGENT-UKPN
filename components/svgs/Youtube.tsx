import { BaseIconProps } from '_types/local'

const Youtube = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <path d="M13.0767 2.12275C10.674 1.95875 5.32267 1.95942 2.92333 2.12275C0.325334 2.30008 0.0193333 3.86939 0 8C0.0193333 12.1233 0.322667 13.6993 2.92333 13.8773C5.32333 14.0406 10.674 14.0412 13.0767 13.8773C15.6747 13.6999 15.9807 12.1306 16 8C15.9807 3.87672 15.6773 2.30075 13.0767 2.12275ZM6 10.6666V5.33337L11.3333 7.99533L6 10.6666Z" />
    </svg>
  )
}

export default Youtube
