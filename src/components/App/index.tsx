import '../../reset.css'
import { Button } from '../Button'
import { Game } from '../Game'
import { SideBar } from '../SideBar'
import styles from './style.module.scss'
import { useEffect } from 'react'
import { TbMusicOff } from 'react-icons/tb'

export const App = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Game />
    </div>
  )
}

export default App
