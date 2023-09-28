import { BaseIconProps } from '_types/local'

const Media = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M4.75 7.75V2.75C4.75155 2.22004 4.96276 1.71224 5.3375 1.3375C5.71224 0.962763 6.22004 0.751551 6.75 0.75H21.25C21.78 0.751551 22.2878 0.962763 22.6625 1.3375C23.0372 1.71224 23.2484 2.22004 23.25 2.75V21.25C23.2484 21.78 23.0372 22.2878 22.6625 22.6625C22.2878 23.0372 21.78 23.2484 21.25 23.25H7.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 7.75001V21.25C4.75 21.7804 4.53929 22.2892 4.16421 22.6642C3.78914 23.0393 3.28043 23.25 2.75 23.25C2.21957 23.25 1.71086 23.0393 1.33579 22.6642C0.960714 22.2892 0.75 21.7804 0.75 21.25V7.75001C0.75 7.75001 4.74009 7.7401 4.75 7.75001Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.84229 14.975H18.8423"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.84229 18.975H18.8423"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8423 5.10358H8.84229V11.1036H18.8423V5.10358Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Media
