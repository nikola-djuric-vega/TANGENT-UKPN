import { BaseIconProps } from '_types/local'

const Supplier = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M15.6089 14.112C16.0825 13.6438 16.4584 13.0863 16.715 12.4717C16.9717 11.8572 17.1038 11.1978 17.1038 10.5319C17.1038 9.86589 16.9717 9.20654 16.715 8.592C16.4584 7.97746 16.0825 7.41993 15.6089 6.95171C14.648 6.00161 13.3512 5.46875 11.9999 5.46875C10.6486 5.46875 9.35179 6.00161 8.39089 6.95171C7.91731 7.41993 7.54133 7.97746 7.28473 8.592C7.02812 9.20654 6.896 9.86589 6.896 10.5319C6.896 11.1978 7.02812 11.8572 7.28473 12.4717C7.54133 13.0863 7.91731 13.6438 8.39089 14.112C9.22243 14.9952 9.85161 16.049 10.2347 17.2H13.7651C14.1482 16.049 14.7773 14.9952 15.6089 14.112Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2683 20.3257H13.7316"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1343 23.25H12.8659"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1094 0.75V2.70589"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.09473 2.03381L8.07362 3.72767"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.39453 5.65051L5.09002 6.62846"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.631H3.95778"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10.8497H20.0422"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.715 5.83984L19.0195 6.81779"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0949 2.14313L16.116 3.83698"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Supplier
