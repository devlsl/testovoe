import { SkillLevel, SkillName } from 'data/character'
import styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { word } from '../../utils/word'
import { Words } from 'data/locale/words'
import { characterActions } from 'store/slices/character'
import { Button } from 'components/Button'

export interface SkillElementProps {
  name: SkillName
}

export const SkillElement = ({ name }: SkillElementProps) => {
  const score = useAppSelector((state) => state.character.score)
  const lang = useAppSelector((state) => state.app.lang)
  const skill = useAppSelector((state) => state.character.skills[name])
  const attributeValue = useAppSelector(
    (state) => state.character.attributes[skill.attribute]
  )

  const dispatch = useAppDispatch()

  const conditionForUpSkillLevel =
    score && attributeValue > skill.level && skill.level < 5

  return (
    <div className={styles.wrapper}>
      <div className={styles.horizontal}>
        <div className={styles.skill}>
          {word(name, lang, true)}:{' '}
          {word(SkillLevel[skill.level] as Words, lang)}
        </div>

        {conditionForUpSkillLevel ? (
          <Button onClick={() => dispatch(characterActions.levelUpSkill(name))}>
            {word('up', lang)}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
