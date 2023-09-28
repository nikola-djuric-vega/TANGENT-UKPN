import { BaseIconProps } from '_types/local'

const Appliance = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M19.3299 1.18994H4.61991C4.08972 1.18994 3.65991 1.61975 3.65991 2.14994V22.7299C3.65991 23.2601 4.08972 23.6899 4.61991 23.6899H19.3299C19.8601 23.6899 20.2899 23.2601 20.2899 22.7299V2.14994C20.2899 1.61975 19.8601 1.18994 19.3299 1.18994Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.84985 5.77991H20.3399"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13.4399 3.43994H14.2699"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6199 3.43994H17.4399"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.98 20.5299C15.1501 20.5299 17.72 17.96 17.72 14.7899C17.72 11.6198 15.1501 9.04993 11.98 9.04993C8.80988 9.04993 6.23999 11.6198 6.23999 14.7899C6.23999 17.96 8.80988 20.5299 11.98 20.5299Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default Appliance
