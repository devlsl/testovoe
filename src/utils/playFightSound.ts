import fightSoundPath from '../assets/sounds/fight.mp3'
import { play } from './playSound'

export const playFightSound = () => {
  play(fightSoundPath)
}
