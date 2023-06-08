import { useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { word } from '../../utils/word'
import { SkillElement } from 'components/SkillElement'
import { SkillName } from 'data/character'

export const Skills = () => {
  const SkillNames = useAppSelector((state) =>
    Object.keys(state.character.skills)
  )
  const lang = useAppSelector((state) => state.app.lang)

  return (
    <div className={styles.wrapper}>
      <h3>{word('skills', lang, true)}</h3>

      {SkillNames.map((name, i) => (
        <SkillElement key={i} name={name as SkillName} />
      ))}
    </div>
  )
}
