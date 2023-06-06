import styles from './style.module.scss'
import { Button } from '../Button'
import { Lang, langs } from '../../data/locale/types'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { TbMusicOff, TbMusic } from 'react-icons/tb'
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md'
import { appActions } from '../../store/slices/app'
import { useState } from 'react'
import { play } from '../../utils/playSound'
import backMusicPath from '../../assets/sounds/backMusic.mp3'

export const SideBar = () => {
  const appState = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  const toggleSoundsHandler = () => {
    dispatch(appActions.toggleSounds())
  }

  const [musicStopMethods, setMusicStopMethods] = useState<(() => void)[]>([])
  const [musicInterval, setMusicInterval] = useState<number>()

  const toggleMusicHandler = () => {
    // bad (probably this logic should be implemented using middleware)
    if (appState.musicIsOn) {
      musicStopMethods.forEach((stop) => stop())
      clearInterval(musicInterval)
    } else {
      setMusicStopMethods(musicStopMethods.concat(play(backMusicPath)))
      setMusicInterval(
        setInterval(() => {
          setMusicStopMethods(musicStopMethods.concat(play(backMusicPath)))
        }, 98000)
      )
    }

    dispatch(appActions.toggleMusic())
  }

  const setLocaleHandler = (lang: Lang) => {
    dispatch(appActions.setLang(lang))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Button onClick={toggleMusicHandler} selected={appState.musicIsOn}>
          {appState.musicIsOn ? <TbMusic /> : <TbMusicOff />}
        </Button>
        <Button onClick={toggleSoundsHandler} selected={appState.soundsIsOn}>
          {appState.soundsIsOn ? <MdVolumeUp /> : <MdVolumeOff />}
        </Button>
      </div>
      <div className={styles.block}>
        {langs.map((lang) => (
          <Button
            selected={appState.lang === lang}
            onClick={() => setLocaleHandler(lang)}
          >
            {lang}
          </Button>
        ))}
      </div>
    </div>
  )
}
