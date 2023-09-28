import { BaseIconProps } from '_types/local'

const PowerOn = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M4.81989 4.05994C0.129885 8.02994 -0.470115 15.0499 3.49988 19.7399C7.45988 24.4399 14.4799 25.0299 19.1799 21.0599C23.8799 17.0999 24.4699 10.0799 20.4999 5.37994C20.0999 4.89994 19.6499 4.45994 19.1799 4.05994"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.18994V12.6799"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PowerOn
