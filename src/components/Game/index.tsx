import styles from './style.module.scss'
import { LookSelect } from '../LookSelect'
import { NameSelect } from '../NameSelect'
import { AttributeSelects } from '../AttributeSelects'

export const Game = () => {
  return (
    <div className={styles.wrapper}>
      <LookSelect />
      <div className={styles.vertical}>
        <NameSelect />
        <AttributeSelects />
      </div>

      {/*<Skills />
      <Score />
      <GetScore /> */}
    </div>
  )
}
