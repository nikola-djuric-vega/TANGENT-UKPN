import { BaseIconProps } from '_types/local'

const Feedback = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M18.1676 12.001H5.83264C5.42531 12.0009 5.03453 12.1621 4.74563 12.4493C4.45673 12.7364 4.29321 13.1262 4.29077 13.5335V18.6965C4.29322 19.1038 4.45675 19.4936 4.74564 19.7807C5.03454 20.0679 5.42532 20.229 5.83264 20.229H9.17658L12.0001 23.2941L14.8236 20.229H18.1676C18.5749 20.2291 18.9657 20.0679 19.2546 19.7808C19.5435 19.4936 19.707 19.1038 19.7094 18.6965V13.5335C19.707 13.1262 19.5435 12.7364 19.2546 12.4492C18.9657 12.1621 18.5749 12.0009 18.1676 12.001Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99993 2.57693L5.01828 4.62682L7.29405 4.95529L5.64699 6.55152L6.03569 8.8047L3.99993 7.74117L1.96416 8.8047L2.35287 6.55152L0.705811 4.95529L2.98158 4.62682L3.99993 2.57693Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9999 2.57693L21.0183 4.62682L23.294 4.95529L21.647 6.55152L22.0357 8.8047L19.9999 7.74117L17.9642 8.8047L18.3529 6.55152L16.7058 4.95529L18.9816 4.62682L19.9999 2.57693Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9999 0.705872L13.0183 2.75575L15.294 3.08517L13.647 4.68046L14.0357 6.93364L11.9999 5.87011L9.96416 6.93364L10.3529 4.68046L8.70581 3.08517L10.9816 2.75575L11.9999 0.705872Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.23535 16H15.7648"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Feedback
