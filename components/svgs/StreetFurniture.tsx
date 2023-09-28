import { BaseIconProps } from '_types/local'

const StreetFurniture = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M22.2271 4.93079C22.2271 6.58765 21.3113 7.93079 20.1817 7.93079C19.052 7.93079 18.1362 6.58765 18.1362 4.93079"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.86362 4.93079C5.86362 6.58765 4.94783 7.93079 3.81815 7.93079C2.68847 7.93079 1.77271 6.58765 1.77271 4.93079"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1135 4.93079H23.2499"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 4.93079H6.88636"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.84093C12.0017 3.75706 12.4334 2.71816 13.2005 1.95235C13.9675 1.18654 15.007 0.756409 16.0909 0.756409C17.1748 0.756409 18.2144 1.18654 18.9814 1.95235C19.7484 2.71816 20.1801 3.75706 20.1818 4.84093"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.81812 4.84091C3.81812 3.75593 4.24912 2.71539 5.01632 1.9482C5.78351 1.18101 6.82405 0.75 7.90903 0.75C8.994 0.75 10.0345 1.18101 10.8017 1.9482C11.5689 2.71539 11.9999 3.75593 11.9999 4.84091V23.0806"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.1875 23.25H14.8125"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default StreetFurniture
