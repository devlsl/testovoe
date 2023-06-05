import '../../reset.css'
import { playBackMusic } from '../../utils/playBackMusic'
import { playClickSound } from '../../utils/playClickSound'
import { Button } from '../Button'
import { Game } from '../Game'
import { SoundBar } from '../SoundBar'
import styles from './style.module.scss'
import { useEffect } from 'react'
import { TbMusicOff } from 'react-icons/tb'

export const App = () => {
  useEffect(() => {
    playBackMusic()
  }, [])

  return (
    <div className={styles.app} style={{ border: '1px solid red' }}>
      <SoundBar />
      <Button>
        <TbMusicOff size={40} />
      </Button>

      <Game />
    </div>
  )
}

export default App
