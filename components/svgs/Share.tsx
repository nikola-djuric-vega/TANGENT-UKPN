import { BaseIconProps, IconType } from '_types/local'

const Share = ({
  type = IconType.DEFAULT,
  baseColour,
  className,
  size,
  flip,
}: BaseIconProps) => {
  switch (type) {
    case IconType.LARGE:
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          data-size="lg"
          data-flip={flip}
          fill="none"
        >
          <path
            d="M7.17847 13.6071L16.8213 18.4286"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.17847 10.3929L16.8213 5.57143"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.96429 15.2143C5.73949 15.2143 7.17857 13.7752 7.17857 12C7.17857 10.2248 5.73949 8.78572 3.96429 8.78572C2.18908 8.78572 0.75 10.2248 0.75 12C0.75 13.7752 2.18908 15.2143 3.96429 15.2143Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0358 7.17857C21.811 7.17857 23.2501 5.73949 23.2501 3.96429C23.2501 2.18908 21.811 0.75 20.0358 0.75C18.2606 0.75 16.8215 2.18908 16.8215 3.96429C16.8215 5.73949 18.2606 7.17857 20.0358 7.17857Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0358 23.25C21.811 23.25 23.2501 21.8109 23.2501 20.0357C23.2501 18.2605 21.811 16.8214 20.0358 16.8214C18.2606 16.8214 16.8215 18.2605 16.8215 20.0357C16.8215 21.8109 18.2606 23.25 20.0358 23.25Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M7.17847 13.6071L16.8213 18.4286"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.17847 10.3929L16.8213 5.57143"
            {...(baseColour && { stroke: '#758BFD' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.96429 15.2143C5.73949 15.2143 7.17857 13.7752 7.17857 12C7.17857 10.2248 5.73949 8.78572 3.96429 8.78572C2.18908 8.78572 0.75 10.2248 0.75 12C0.75 13.7752 2.18908 15.2143 3.96429 15.2143Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0358 7.17857C21.811 7.17857 23.2501 5.73949 23.2501 3.96429C23.2501 2.18908 21.811 0.75 20.0358 0.75C18.2606 0.75 16.8215 2.18908 16.8215 3.96429C16.8215 5.73949 18.2606 7.17857 20.0358 7.17857Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0358 23.25C21.811 23.25 23.2501 21.8109 23.2501 20.0357C23.2501 18.2605 21.811 16.8214 20.0358 16.8214C18.2606 16.8214 16.8215 18.2605 16.8215 20.0357C16.8215 21.8109 18.2606 23.25 20.0358 23.25Z"
            {...(baseColour && { stroke: '#27187E' })}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default Share
