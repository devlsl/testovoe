import { AttributeName } from 'data/character'
import styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { word } from 'utils/word'
import { Button } from 'components/Button'
import { characterActions } from 'store/slices/character'
import { RootState } from 'store/index'

export interface AttributeElementProps {
  name: AttributeName
}

export const AttributeElement = ({ name }: AttributeElementProps) => {
  const score = useAppSelector((state) => state.character.score)

  const lang = useAppSelector((state: RootState) => state.app.lang)
  const attributeValue = useAppSelector(
    (state: RootState) => state.character.attributes[name]
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
