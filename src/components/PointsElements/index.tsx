import { useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { PointsName } from 'data/character'
import { word } from '../../utils/word'

export interface PointsElementProps {
  name: PointsName
}

export const PointsElement = ({ name }: PointsElementProps) => {
  const lang = useAppSelector((state) => state.app.lang)
  const pointsValue = useAppSelector((state) => state.character.points[name])

  return (
    <div className={styles.wrapper}>
      {word(name, lang, true)}: {pointsValue}
    </div>
  )
}
