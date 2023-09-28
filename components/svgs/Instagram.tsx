import { BaseIconProps } from '_types/local'

const Instagram = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M11.62 0.75H4.37C2.37 0.75 0.75 2.37 0.75 4.38V11.63C0.75 13.63 2.37 15.25 4.37 15.25H11.62C13.62 15.25 15.24 13.63 15.24 11.63V4.38C15.24 2.38 13.62 0.76 11.62 0.76V0.75ZM8 11.75C5.93 11.75 4.25 10.07 4.25 8C4.25 5.93 5.93 4.25 8 4.25C10.07 4.25 11.75 5.93 11.75 8C11.75 10.07 10.07 11.75 8 11.75ZM12.26 4.8C11.82 4.8 11.46 4.44 11.46 4C11.46 3.56 11.82 3.2 12.26 3.2C12.7 3.2 13.06 3.56 13.06 4C13.06 4.44 12.7 4.8 12.26 4.8Z" />
      <path d="M8 5.75C6.76 5.75 5.75 6.76 5.75 8C5.75 9.24 6.76 10.25 8 10.25C9.24 10.25 10.25 9.24 10.25 8C10.25 6.76 9.24 5.75 8 5.75Z" />
    </svg>
  )
}

export default Instagram