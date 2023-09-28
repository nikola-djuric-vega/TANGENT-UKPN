import { BaseIconProps } from '_types/local'

const Link = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <title>Link</title>
      <path
        d="M8.72437 11.6905L6.07544 14.3394C5.4888 14.9226 4.6952 15.25 3.868 15.25C3.04079 15.25 2.2472 14.9226 1.66056 14.3394V14.3394C1.07735 13.7528 0.75 12.9592 0.75 12.132C0.75 11.3048 1.07735 10.5112 1.66056 9.92455L4.30949 7.27561C4.89613 6.69241 5.68972 6.36505 6.51693 6.36505C7.34414 6.36505 8.13774 6.69241 8.72437 7.27561"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.27563 4.30949L9.92457 1.66056C10.5112 1.07735 11.3048 0.75 12.132 0.75C12.9592 0.75 13.7528 1.07735 14.3395 1.66056C14.9227 2.2472 15.25 3.04079 15.25 3.868C15.25 4.6952 14.9227 5.4888 14.3395 6.07544L11.6905 8.72437C11.1039 9.30758 10.3103 9.63494 9.48308 9.63494C8.65587 9.63494 7.86227 9.30758 7.27563 8.72437"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Link
