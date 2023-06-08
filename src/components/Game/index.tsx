import { useAppDispatch, useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { characterActions } from 'store/slices/character'
import { LookSelect } from 'components/LookSelect'
import { Button } from 'components/Button'
import { word } from '../../utils/word'
import { NameSelect } from 'components/NameSelect'
import { Attributes } from 'components/Attributes'
import { Points } from 'components/Points'
import { Skills } from 'components/Skills'
import { playFightSound } from '../../utils/playFightSound'

export const Game = () => {
  const [lang, soundsIsOn, health] = useAppSelector((state) => [
    state.app.lang,
    state.app.soundsIsOn,
    state.character.points.health
  ])
  const dispatch = useAppDispatch()

  const fightHandler = () => {
    dispatch(characterActions.takeDamage())
    if (soundsIsOn) {
      playFightSound()
    }
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
