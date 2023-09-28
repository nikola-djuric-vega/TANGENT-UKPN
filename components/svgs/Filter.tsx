import { BaseIconProps } from '_types/local'

const Filter = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M3.33936 0.75V6.96429"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33936 13.1786L3.33936 15.25"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 10.0714C0.75 11.5015 1.90926 12.6607 3.33929 12.6607C4.76931 12.6607 5.92857 11.5015 5.92857 10.0714C5.92857 8.64141 4.76931 7.48215 3.33929 7.48215C1.90926 7.48215 0.75 8.64141 0.75 10.0714Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6606 8.51785V15.25"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6606 0.75V3.33929"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0715 5.92858C10.0715 7.3586 11.2308 8.51787 12.6608 8.51787C14.0908 8.51787 15.2501 7.3586 15.2501 5.92858C15.2501 4.49856 14.0908 3.33929 12.6608 3.33929C11.2308 3.33929 10.0715 4.49856 10.0715 5.92858Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Filter
