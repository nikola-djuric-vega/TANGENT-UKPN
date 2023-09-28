import { BaseIconProps } from '_types/local'

const Van = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M14.2092 15.4604C14.2092 15.4604 14.5713 10.7111 3.3562 10.1327"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9289 15.4959C10.9289 15.4959 11.1619 13.0989 3.27026 12.6919"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5908 20.0345C19.6954 20.0345 20.5908 19.1391 20.5908 18.0345C20.5908 16.9299 19.6954 16.0345 18.5908 16.0345C17.4863 16.0345 16.5908 16.9299 16.5908 18.0345C16.5908 19.1391 17.4863 20.0345 18.5908 20.0345Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.04419 20.0345C6.14876 20.0345 7.04419 19.1391 7.04419 18.0345C7.04419 16.9299 6.14876 16.0345 5.04419 16.0345C3.93962 16.0345 3.04419 16.9299 3.04419 18.0345C3.04419 19.1391 3.93962 20.0345 5.04419 20.0345Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3449 18H7.11938"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.78145 18C2.23887 17.994 1.72068 17.7736 1.34007 17.3869C0.95945 17.0002 0.747327 16.4785 0.750025 15.9359V6.06409C0.747327 5.52148 0.95945 4.99984 1.34007 4.61311C1.72068 4.22637 2.23887 4.00596 2.78145 4H15.1243C17.4852 4 19.1406 6.8555 20.4015 9.347C20.9737 10.2854 21.6934 11.1254 22.533 11.8347C22.7603 12.0423 22.9415 12.2953 23.065 12.5773C23.1885 12.8592 23.2515 13.164 23.25 13.4718V15.936C23.2527 16.4786 23.0406 17.0002 22.66 17.3869C22.2794 17.7736 21.7612 17.994 21.2186 18"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9519 4.27197V9.91897H20.5319"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Van
