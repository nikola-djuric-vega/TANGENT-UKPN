import { BaseIconProps } from '_types/local'

const Fridge = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M15.2857 20.3846C15.2842 20.9146 15.0729 21.4224 14.6982 21.7971C14.3235 22.1719 13.8157 22.3831 13.2857 22.3846H7C6.47004 22.3831 5.96224 22.1719 5.5875 21.7971C5.21276 21.4224 5.00155 20.9146 5 20.3846V3.61542C5.00155 3.08546 5.21276 2.57766 5.5875 2.20292C5.96224 1.82818 6.47004 1.61697 7 1.61542H15.2542C15.2583 1.61542 15.2624 1.61623 15.2663 1.61781C15.2701 1.61939 15.2736 1.62171 15.2765 1.62464C15.2794 1.62756 15.2817 1.63103 15.2833 1.63485C15.2849 1.63867 15.2857 1.64276 15.2857 1.6469V20.3846Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.7308H15.2857"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7.6731H15.2857"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.57153 16.3269V17.3269"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.85718 22.3846V23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4285 22.3846V23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9999 14.596L15.2859 13.731V1.615L18.9999 0.75V14.596Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6521 12.7141C8.20438 12.7141 8.6521 12.2663 8.6521 11.7141C8.6521 11.1618 8.20438 10.7141 7.6521 10.7141C7.09981 10.7141 6.6521 11.1618 6.6521 11.7141C6.6521 12.2663 7.09981 12.7141 7.6521 12.7141Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M10.1521 12.7141C10.7044 12.7141 11.1521 12.2663 11.1521 11.7141C11.1521 11.1618 10.7044 10.7141 10.1521 10.7141C9.59981 10.7141 9.1521 11.1618 9.1521 11.7141C9.1521 12.2663 9.59981 12.7141 10.1521 12.7141Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M12.6521 12.7141C13.2044 12.7141 13.6521 12.2663 13.6521 11.7141C13.6521 11.1618 13.2044 10.7141 12.6521 10.7141C12.0998 10.7141 11.6521 11.1618 11.6521 11.7141C11.6521 12.2663 12.0998 12.7141 12.6521 12.7141Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M8.9021 10.7141C9.45438 10.7141 9.9021 10.2663 9.9021 9.71405C9.9021 9.16177 9.45438 8.71405 8.9021 8.71405C8.34981 8.71405 7.9021 9.16177 7.9021 9.71405C7.9021 10.2663 8.34981 10.7141 8.9021 10.7141Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
      <path
        d="M11.4021 10.7141C11.9544 10.7141 12.4021 10.2663 12.4021 9.71405C12.4021 9.16177 11.9544 8.71405 11.4021 8.71405C10.8498 8.71405 10.4021 9.16177 10.4021 9.71405C10.4021 10.2663 10.8498 10.7141 11.4021 10.7141Z"
        {...(baseColour ? { fill: '#758BFD' } : { fill: 'currentColor' })}
      />
    </svg>
  )
}

export default Fridge
