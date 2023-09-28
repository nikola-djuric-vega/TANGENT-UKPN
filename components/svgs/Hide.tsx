import { BaseIconProps } from '_types/local'

const Hide = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.44 11.0499C9.56003 11.9299 9.56003 13.3499 10.44 14.2299C11.32 15.1099 12.74 15.1099 13.62 14.2299"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.06002 5.1799C10.02 4.8999 11.02 4.7699 12.03 4.7699C16.53 4.7699 20.28 7.3899 23.28 12.6499C22.4 14.1799 21.47 15.4899 20.46 16.5699M18.05 18.6599C16.22 19.8999 14.21 20.5199 12.02 20.5199C7.52002 20.5199 3.77002 17.8999 0.77002 12.6399C2.31002 9.9499 4.05002 7.9399 5.98002 6.6299"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.90991 2.5199L22.1499 22.7599"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hide
