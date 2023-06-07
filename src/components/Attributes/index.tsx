import { AttributeName } from '../../data/character'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { characterActions } from '../../store/slices/character'
import { word } from '../../utils/word'
import { AttributeElement } from '../AttributeElement'
import { Button } from '../Button'
import styles from './style.module.scss'

export const Attributes = () => {
  const attributeNames = useAppSelector((state) =>
    Object.keys(state.character.attributes)
  )
  const score = useAppSelector((state) => state.character.score)
  const lang = useAppSelector((state) => state.app.lang)

  const dispatch = useAppDispatch()

  return (
    <div className={styles.wrapper}>
      <div className={styles.horizontal}>
        <h3>
          {word('score', lang, true)}: {score}
        </h3>
        <Button onClick={() => dispatch(characterActions.upScore(1))}>
          {word('up score', lang)}
        </Button>
      </div>

      {attributeNames.map((name, i) => (
        <AttributeElement key={i} name={name as AttributeName} />
      ))}
    </div>
  )
}
