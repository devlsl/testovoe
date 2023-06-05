import { PropsWithChildren } from 'react'
import styles from './style.module.scss'

export const Button = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>
}
