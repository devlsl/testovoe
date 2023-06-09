import { useAppDispatch, useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { appActions } from 'store/slices/app'
import { useState } from 'react'
import { play } from 'utils/playSound'
import backMusicPath from 'assets/sounds/backMusic.mp3'
import { Lang, langs } from 'data/locale/types'
import { word } from 'utils/word'
import { isCharacter } from 'utils/isCharacter'
import { characterActions } from 'store/slices/character'
import { download } from 'utils/download'
import { Button } from 'components/Button'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md'
import { BiImport, BiExport } from 'react-icons/bi'

export const SideBar = () => {
  const appState = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  const character = useAppSelector((state) => state.character)

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

  const changeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    let reader = new FileReader()
    if (!files) {
      alert(word('error', appState.lang))
    } else {
      reader.readAsDataURL(files[0])
      reader.onload = (e) => {
        fetch(e.target?.result as string)
          .then((response) => response.json())
          .then((json) => {
            if (isCharacter(json)) {
              dispatch(characterActions.setNewCharacter(json))
            } else {
              alert(word('error', appState.lang))
            }
          })
      }
    }
  }

  const downloadHandler = () => {
    download(
      JSON.stringify(character),
      `character_${character.name ? character.name : 'unknown'}.json`,
      'text/json'
    )
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
        {langs.map((lang, i) => (
          <Button
            key={i}
            selected={appState.lang === lang}
            onClick={() => setLocaleHandler(lang)}
          >
            {lang}
          </Button>
        ))}
      </div>
      <div className={styles.block}>
        <Button onClick={() => downloadHandler()}>
          <BiImport />
        </Button>
        <Button onClick={() => {}}>
          <label className={styles.inputFile}>
            <input
              type="file"
              accept="application/JSON"
              onChange={changeFileHandler}
            />
            <BiExport />
          </label>
        </Button>
      </div>
    </div>
  )
}
