import { BaseIconProps } from '_types/local'

const Quote = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12.03 23.8899C18.2432 23.8899 23.28 18.8531 23.28 12.6399C23.28 6.42669 18.2432 1.38989 12.03 1.38989C5.81683 1.38989 0.780029 6.42669 0.780029 12.6399C0.780029 18.8531 5.81683 23.8899 12.03 23.8899Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
      />
      <path
        d="M10.1416 8H8.16666C7.51666 8 7 8.51666 7 9.14166V11.875C7 12.5 7.51666 13.0166 8.16666 13.0166H9.29165V13.4416C9.29165 14.1166 8.77499 14.7416 8.05833 14.9666C7.51666 15.125 7.225 15.6833 7.38333 16.1999C7.51666 16.6249 7.89999 16.9166 8.34999 16.9166C8.44166 16.9166 8.53332 16.8916 8.64166 16.8749C10.2333 16.3999 11.3083 15.0166 11.3083 13.4416V9.14166C11.2833 8.49166 10.7666 8 10.1416 8Z"
        {...(baseColour && { fill: '#758BFD' })}
      />
      <path
        d="M15.8333 8H13.8583C13.2083 8 12.6917 8.51666 12.6917 9.14166V11.875C12.6917 12.5 13.2083 13.0166 13.8583 13.0166H14.9833V13.4416C14.9833 14.1166 14.4666 14.7416 13.75 14.9666C13.2083 15.125 12.9166 15.6833 13.075 16.1999C13.2083 16.6249 13.5916 16.9166 14.0416 16.9166C14.1333 16.9166 14.225 16.8916 14.3333 16.8749C15.925 16.3999 17 15.0166 17 13.4416V9.14166C16.975 8.49166 16.4583 8 15.8333 8Z"
        {...(baseColour && { fill: '#758BFD' })}
      />
    </svg>
  )
}

export default Quote