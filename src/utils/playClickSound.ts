import clickSoundPath from 'assets/sounds/clickSound.mp3'
import { play } from 'utils/playSound'

export const playClickSound = () => {
  play(clickSoundPath)
}
