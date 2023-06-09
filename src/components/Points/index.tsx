import { useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { PointsElement } from 'components/PointsElements'
import { PointsName } from 'data/character'
import { RootState } from 'store/index'

export const Points = () => {
  const pointsNames = useAppSelector((state: RootState) =>
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
