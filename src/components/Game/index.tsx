import styles from './style.module.scss'
import { LookSelect } from '../LookSelect'
import { NameSelect } from '../NameSelect'
import { Attributes } from '../Attributes'
import { Points } from '../Points'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { characterActions } from '../../store/slices/character'
import { word } from '../../utils/word'
import { Button } from '../Button'
import { playFightSound } from '../../utils/playFightSound'
import { Skills } from '../Skills'

export const Game = () => {
  const [lang, soundsIsOn, health] = useAppSelector((state) => [
    state.app.lang,
    state.app.soundsIsOn,
    state.character.points.health
  ])
  const dispatch = useAppDispatch()

  const fightHandler = () => {
    dispatch(characterActions.takeDamage())
    if (soundsIsOn) playFightSound()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.vertical}>
        <LookSelect />
        <div className={styles.fight}>
          {health !== 1 ? (
            <Button offClickSound onClick={fightHandler}>
              {word('fight', lang, true)}
            </Button>
          ) : null}
        </div>
      </div>
      <div className={styles.vertical}>
        <NameSelect />
        <Attributes />
        <Points />
      </div>
      <div className={styles.vertical}>
        <Skills />
      </div>
    </div>
  )
}
