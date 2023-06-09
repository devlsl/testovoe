import { useAppDispatch, useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { characterActions } from 'store/slices/character'
import { Button } from 'components/Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { RootState } from 'store/index'

export const LookSelect = () => {
  const dispatch = useAppDispatch()
  const look = useAppSelector((state: RootState) => state.character.look)

  return (
    <div className={styles.wrapper}>
      <div className={styles.looks}>
        <img src={`assets/charactersLook/${look}.png`} alt="look" />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => dispatch(characterActions.setPrevLook())}>
          <MdKeyboardArrowLeft size={40} />
        </Button>
        <Button onClick={() => dispatch(characterActions.setNextLook())}>
          <MdKeyboardArrowRight size={40} />
        </Button>
      </div>
    </div>
  )
}
