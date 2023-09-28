import { BaseIconProps } from '_types/local'

const TreeBushPowerline = ({
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14.21 23.6269V18.993"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1399 18.19C10.4299 18.08 9.11994 16.54 9.21994 14.75C9.22994 14.56 9.25995 14.37 9.29995 14.19C7.97995 13.04 7.79995 10.99 8.89995 9.61C9.09995 9.35 9.34995 9.13 9.61995 8.95C8.77995 7.38 9.30995 5.4 10.7999 4.52C11.9599 3.84 13.3999 4 14.3899 4.93C15.6699 3.73 17.6299 3.85 18.7699 5.19C19.6499 6.23 19.8099 7.74 19.1599 8.95C20.5999 9.91 21.0299 11.92 20.1099 13.44C19.9399 13.72 19.7199 13.98 19.4799 14.19C19.8799 15.94 18.8499 17.69 17.1799 18.11C16.9399 18.17 16.6999 18.2 16.4599 18.2H12.3199H12.1399V18.19Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2398 11.74C22.3098 11.46 22.3498 11.17 22.3298 10.86C22.3298 10.69 22.2998 10.51 22.2598 10.34C23.4598 9.28995 23.6298 7.41995 22.6298 6.14995C22.4398 5.90995 22.2198 5.70995 21.9698 5.53995C22.7398 4.10995 22.2498 2.28995 20.8898 1.48995C19.8298 0.869953 18.5098 1.01995 17.6098 1.86995C16.4398 0.779953 14.6498 0.879953 13.5998 2.10995C13.4998 2.21995 13.4198 2.33995 13.3398 2.45995"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.78003 3.77991V23.6199"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M0.780029 6.47986H6.78003"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2.21997 8.8999H5.18997"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M1.1001 4.73996V4.20996"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.58008 4.73996V4.20996"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.23993 13.2899H1.92993V16.3499H3.47993"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TreeBushPowerline
