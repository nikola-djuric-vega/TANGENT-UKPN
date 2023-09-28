import { BaseIconProps } from '_types/local'

const ContactDetails = ({
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
        d="M23.25 18C23.2646 18.5133 23.0756 19.0115 22.7244 19.3862C22.3732 19.7608 21.8882 19.9814 21.375 20H2.62505C2.11188 19.9814 1.62686 19.7608 1.27565 19.3862C0.92445 19.0115 0.735526 18.5133 0.750047 18V6C0.735526 5.4867 0.92445 4.98847 1.27565 4.61385C1.62686 4.23923 2.11188 4.01859 2.62505 4H21.375C21.8882 4.01859 22.3732 4.23923 22.7244 4.61385C23.0756 4.98847 23.2646 5.4867 23.25 6V18Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.66934 11.4042H7.67199C8.0697 11.4039 8.45098 11.2456 8.73202 10.9642C9.01306 10.6828 9.17083 10.3013 9.17065 9.90357C9.17048 9.50586 9.01236 9.1245 8.73108 8.84334C8.44979 8.56218 8.06836 8.40424 7.67065 8.40424C7.27294 8.40424 6.89152 8.56218 6.61023 8.84334C6.32894 9.1245 6.17083 9.50586 6.17065 9.90357C6.17048 10.3013 6.32825 10.6828 6.60929 10.9642C6.89033 11.2456 7.27162 11.4039 7.66932 11.4042H7.66934Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M10.1707 15.5961V14.7027C10.1703 14.3713 10.0385 14.0535 9.80414 13.8192C9.56979 13.5848 9.25206 13.453 8.92065 13.4527H6.42065C6.08924 13.453 5.77151 13.5848 5.53717 13.8192C5.30283 14.0535 5.17102 14.3713 5.17065 14.7027V15.5961"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M13.3293 10.5H19.3293"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3293 13.5H19.3293"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ContactDetails
