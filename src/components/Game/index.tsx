import styles from './style.module.scss'
import { LookSelect } from '../LookSelect'

export const Game = () => {
  return (
    <div className={styles.wrapper}>
      <LookSelect />
    </div>
  )
}
