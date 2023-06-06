import styles from './style.module.scss'
import { Button } from '../Button'
import { Locale, locales } from '../../data/locale/types'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { TbMusicOff, TbMusic } from 'react-icons/tb'
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md'
import { appActions } from '../../store/slices/app'
import { useEffect, useState } from 'react'
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
      console.log('on')
      musicStopMethods.forEach((stop) => stop())
      clearInterval(musicInterval)
    } else {
      setMusicStopMethods(musicStopMethods.concat(play(backMusicPath)))
      setMusicInterval(
        setInterval(() => {
          setMusicStopMethods(musicStopMethods.concat(play(backMusicPath)))
        }, 6000)
      )
    }

    dispatch(appActions.toggleMusic())
  }

  useEffect(() => console.log(musicStopMethods.length), [musicStopMethods])

  const setLocaleHandler = (locale: Locale) => {
    dispatch(appActions.setLocale(locale))
  }

  return (
    <div className="wrapper">
      <div className="soundBlock">
        <Button onClick={toggleMusicHandler} selected={appState.musicIsOn}>
          {appState.musicIsOn ? <TbMusic /> : <TbMusicOff />}
        </Button>
        <Button onClick={toggleSoundsHandler} selected={appState.soundsIsOn}>
          {appState.soundsIsOn ? <MdVolumeUp /> : <MdVolumeOff />}
        </Button>
      </div>
      <div className="localeBlock">
        {locales.map((locale) => (
          <Button
            selected={appState.locale === locale}
            onClick={() => setLocaleHandler(locale)}
          >
            {locale}
          </Button>
        ))}
      </div>
    </div>
  )
}
