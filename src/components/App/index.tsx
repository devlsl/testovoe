import '../../reset.css'
import { playBackMusic } from '../../utils/playBackMusic'
import { playClickSound } from '../../utils/playClickSound'
import { Game } from '../Game'
import cl from './style.module.scss'
import { useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    playBackMusic()
  }, [])

  return (
    <div className={cl.app}>
      <Game />
    </div>
  )
}

export default App
