import styles from './style.module.scss'
import { AttributeName } from '../../data/character'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { Button } from '../Button'
import { characterActions } from '../../store/slices/character'
import { locale } from '../../data/locale'
import { useLocale } from '../../hooks/useLocale'
import { word } from '../../utils/word'

export interface AttributeElementProps {
  name: AttributeName
}

export const AttributeElement = ({ name }: AttributeElementProps) => {
  const score = useAppSelector((state) => state.character.score)
  const lang = useAppSelector((state) => state.app.lang)
  const attributeValue = useAppSelector(
    (state) => state.character.attributes[name]
  )

  const dispatch = useAppDispatch()

  return (
    <div className={styles.wrapper}>
      <div className={styles.horizontal}>
        <div className={styles.attribute}>
          {word(name, lang, true)}: {attributeValue}
        </div>

        {score ? (
          <Button
            onClick={() => dispatch(characterActions.levelUpAttribute(name))}
          >
            {word('up', lang)}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
