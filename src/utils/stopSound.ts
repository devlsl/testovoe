export const stopSound = (sound: HTMLAudioElement) => {
  sound.currentTime = 0
  sound.pause()
}
