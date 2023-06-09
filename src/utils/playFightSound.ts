import fightSoundPath from 'assets/sounds/fight.mp3'
import { play } from 'utils/playSound'

export const playFightSound = () => {
  play(fightSoundPath)
}
