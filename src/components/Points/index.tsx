import { PointsName } from '../../data/character'
import { useAppSelector } from '../../hooks/store'
import { PointsElement } from '../PointsElements'
import styles from './style.module.scss'

export const Points = () => {
  const pointsNames = useAppSelector((state) =>
    Object.keys(state.character.points)
  )

  return (
    <div className={styles.wrapper}>
      {pointsNames.map((name, i) => (
        <PointsElement key={i} name={name as PointsName} />
      ))}
    </div>
  )
}
