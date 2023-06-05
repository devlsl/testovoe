import backMusicPath from '../assets/sounds/backMusic.mp3'
import { play } from './playSound'

export const playBackMusic = () => {
  play(backMusicPath)
  return setInterval(() => play(backMusicPath), 99000)
}
