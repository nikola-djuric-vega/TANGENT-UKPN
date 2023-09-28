import { BaseIconProps, IconType } from '_types/local'

const Play = ({
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
          data-size={size}
          data-flip={flip}
          fill="none"
        >
          <path
            d="M3.44265 23.0564C2.64916 23.5086 2 23.1411 2 22.24V1.75994C2 0.858815 2.64921 0.491435 3.44265 0.943554L21.4049 11.178C21.5787 11.2373 21.7294 11.3483 21.8361 11.4956C21.9427 11.6429 22 11.8192 22 12C22 12.1807 21.9427 12.357 21.8361 12.5043C21.7294 12.6517 21.5787 12.7627 21.4049 12.822L3.44265 23.0564Z"
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
          viewBox="0 0 16 16"
          className={className}
          data-size={size}
          data-flip={flip}
        >
          <path d="M4.72132 13.8968C4.32458 14.1379 4 13.9419 4 13.4613V2.53863C4 2.05803 4.3246 1.8621 4.72132 2.10323L13.7024 7.56158C13.7894 7.59322 13.8647 7.65244 13.918 7.731C13.9713 7.80957 14 7.90358 14 7.99999C14 8.0964 13.9713 8.19042 13.918 8.26898C13.8647 8.34755 13.7894 8.40676 13.7024 8.4384L4.72132 13.8968Z" />
          <path
            d="M4.72132 13.8968C4.32458 14.1379 4 13.9419 4 13.4613V2.53863C4 2.05803 4.3246 1.8621 4.72132 2.10323L13.7024 7.56158C13.7894 7.59322 13.8647 7.65244 13.918 7.731C13.9714 7.80957 14 7.90358 14 7.99999C14 8.0964 13.9714 8.19042 13.918 8.26898C13.8647 8.34755 13.7894 8.40676 13.7024 8.4384L4.72132 13.8968Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default Play
