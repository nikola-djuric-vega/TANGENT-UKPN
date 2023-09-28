import React, { HTMLAttributes } from 'react'
import styles from './Loader.module.scss'

const Loader = (props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={styles.Loader}>
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 92 92"
      data-testid="svg"
    >
      <path
        fill="none"
        fillOpacity="0"
        fillRule="evenodd"
        stroke="#27187E"
        strokeWidth="2"
        d="M91 46C91 21.147 70.853 1 46 1S1 21.147 1 46s20.147 45 45 45c12.997 0 24.708-5.51 32.923-14.322"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 74 74"
    >
      <path
        fill="#758BFD"
        fillRule="nonzero"
        d="M63.163 63.163c14.45-14.45 14.45-37.877 0-52.326-14.45-14.45-37.877-14.45-52.326 0-14.45 14.45-14.45 37.877 0 52.326 7.355 7.355 17.276 11.172 27.468 10.814l-.07-1.999c-9.644.339-19.025-3.27-25.984-10.23-13.668-13.668-13.668-35.828 0-49.497 13.669-13.668 35.83-13.668 49.498 0 13.668 13.669 13.668 35.83 0 49.498l1.414 1.414z"
      />
    </svg>
  </div>
)

export default Loader
