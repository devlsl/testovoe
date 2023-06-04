import clickSoundPath from '../assets/sounds/clickSound.mp3'
import { play } from './playSound'

export const playClickSound = () => {
  play(clickSoundPath)
}
