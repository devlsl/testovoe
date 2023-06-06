import { stopSound } from './stopSound'

export const play = (path: string) => {
  const sound = new Audio(path)
  sound.play()

  return () => stopSound(sound)
}
