import { useAppDispatch, useAppSelector } from 'hooks/store'
import styles from './style.module.scss'
import { useState } from 'react'
import { characterActions } from 'store/slices/character'
import { word } from 'utils/word'
import { Button } from 'components/Button'

export const NameSelect = () => {
  const dispatch = useAppDispatch()
  const name = useAppSelector((state) => state.character.name)

  const lang = useAppSelector((state) => state.app.lang)

  const [newName, setNewName] = useState<string>(name)

  const changeNameHandler = () => {
    dispatch(characterActions.changeName(newName))
    setNewName('')
  }

  return (
    <div className={styles.wrapper}>
      <h3>
        {word('name', lang, true)}: {name}
      </h3>
      <div className={styles.block}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button onClick={changeNameHandler}>
          {word('change', lang, true)}
        </Button>
      </div>
    </div>
  )
}
