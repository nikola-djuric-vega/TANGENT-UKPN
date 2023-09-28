import styles from './ScrollPromp.module.scss'
export interface ScrollPrompProps {
  callback: () => void
}

const ScrollPromp = ({ callback }: ScrollPrompProps) => {
  return (
    <button className={styles.ScrollPromp} onClick={callback}>
      <div className={styles.ScrollPrompTip} />
    </button>
  )
}

export default ScrollPromp
