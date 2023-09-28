import { BaseIconProps } from '_types/local'

const Electrician = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M8.73103 15.0337L8.7137 16.8489C8.365 17.005 7.62707 17.3172 6.22299 17.8452C3.98068 18.6786 2.20973 19.3366 1.40866 20.4591C0.911855 21.3007 0.687085 22.2755 0.765164 23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.269 15.0337L15.2864 16.8489C15.6351 17.005 16.373 17.3172 17.7771 17.8452C20.0194 18.6786 21.7903 19.3366 22.5914 20.4591C23.0882 21.3007 23.313 22.2755 23.2349 23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7425 10.5592C16.7425 13.398 14.6192 16.7508 11.9999 16.7508C9.38066 16.7508 7.25732 13.398 7.25732 10.5592"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.72109 7.74363C5.71362 7.51753 5.75416 7.29242 5.84002 7.08317C5.92589 6.87392 6.05512 6.68531 6.21919 6.5298C6.22169 4.99603 6.83185 3.52594 7.9157 2.44229C8.99955 1.35864 10.4685 0.75 12 0.75C13.5316 0.75 15.0005 1.35864 16.0844 2.44229C17.1682 3.52594 17.7784 4.99603 17.7809 6.5298C17.9449 6.68531 18.0742 6.87392 18.16 7.08317C18.2459 7.29242 18.2864 7.51753 18.279 7.74363H5.72109Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Electrician
