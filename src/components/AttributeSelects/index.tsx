import { AttributeElement } from '../AttributeElement'
import styles from './style.module.scss'

export const AttributeSelects = () => {
  return (
    <div className={styles.wrapper}>
      <AttributeElement name="strength" />
    </div>
  )
}
