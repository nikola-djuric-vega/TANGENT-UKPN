import { BaseIconProps } from '_types/local'

const Pen = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M10.1101 23.9999C16.5601 24.0999 19.2501 23.5899 19.5601 22.4399C19.8901 21.2099 17.9101 19.7499 18.3901 18.7299C18.8201 17.8199 20.8501 17.9399 23.0001 18.3399"
        fill="white"
      />
      <path
        d="M10.1101 23.9999C16.5601 24.0999 19.2501 23.5899 19.5601 22.4399C19.8901 21.2099 17.9101 19.7499 18.3901 18.7299C18.8201 17.8199 20.8501 17.9399 23.0001 18.3399"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15.76L1.20999 18.5299L0.73999 24.0199"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.92005 20.86L21.87 7.90996C23.51 6.26996 23.72 3.80996 22.34 2.41996C20.96 1.02996 18.5 1.23996 16.85 2.88996L4.05005 15.7"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 24.0099L6.24 23.5399L9 20.76"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3601 4.38L20.3801 9.40001"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0701 6.84998L17.7101 11.49"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Pen
