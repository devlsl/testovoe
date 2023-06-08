import '../../reset.css'
import { Game } from '../Game'
import { SideBar } from '../SideBar'
import styles from './style.module.scss'

export const App = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Game />
    </div>
  )
}

export default App
