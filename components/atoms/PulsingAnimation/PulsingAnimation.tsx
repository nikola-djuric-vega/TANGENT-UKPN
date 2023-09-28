import styles from './PulsingAnimation.module.scss'
import { StepName } from '_types/local/step'
import React from 'react'

export enum PulsingAnimationTheme {
  PURPLE = 'Purple',
  ORANGE = 'Orange',
  GREEN = 'Green',
  WHITE = 'White',
  BLUE = 'Blue',
  RED = 'Red',
}

export interface PulsingAnimationProps {
  theme?: PulsingAnimationTheme
  text?: string | StepName
  showAnim?: boolean
  isStatic?: boolean
}

export const PulsingAnimation = ({
  theme = PulsingAnimationTheme.WHITE,
  isStatic = false,
  showAnim = true,
  text = 'LIVE',
}: PulsingAnimationProps) => (
  <div
    className={styles.pulsingAnimation}
    data-label-only={!showAnim}
    data-is-static={isStatic}
    data-theme={theme}
    aria-label={text}
    role="status"
  >
    {showAnim && <span className={styles.pulsinCircle}></span>}
    {!isStatic && <p className={styles.text}>{text}</p>}
  </div>
)

export default PulsingAnimation
