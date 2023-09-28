import { BaseIconProps } from '_types/local'

const Linkedin = ({ className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <path d="M4.04348 15H1V5.45455H4.04348V15ZM2.52235 4.18182C1.68052 4.18182 1 3.46845 1 2.59027C1 1.71209 1.68174 1 2.52235 1C3.36113 1 4.04348 1.71336 4.04348 2.59027C4.04348 3.46845 3.36113 4.18182 2.52235 4.18182ZM15 15H12.074V10.3545C12.074 9.24664 12.0539 7.82182 10.5529 7.82182C9.0293 7.82182 8.79496 9.02836 8.79496 10.2744V15H5.86957V5.44755H8.67809V6.75273H8.71765C9.10843 6.00182 10.0635 5.21018 11.4878 5.21018C14.4522 5.21018 15 7.18864 15 9.76082V15Z" />
    </svg>
  )
}

export default Linkedin
