import { SideBar } from 'components/SideBar'
import '../../reset.css'
import styles from './style.module.scss'
import { Game } from 'components/Game'

export const App = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Game />
    </div>
  )
}

export default App
