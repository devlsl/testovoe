import { useEffect, useState } from 'react'
import cl from './style.module.scss'
import { Look } from '../../data/character'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { playClickSound } from '../../utils/playClickSound'

export const LookSelect = () => {
  const [look, setLook] = useState<Look>(1)

  const setPrevLook = () => {
    setLook((prev) => (prev === 1 ? 6 : prev - 1) as Look)
  }

  const setNextLook = () => {
    setLook((prev) => (prev === 6 ? 1 : prev + 1) as Look)
  }

  useEffect(() => {
    console.log(look)
  }, [])

  return (
    <div className={cl.wrapper}>
      <div className={cl.looks}>
        <img src={`/src/assets/charactersLook/${look}.png`} alt="look" />
      </div>
      <div className={cl.buttons}>
        <button
          onClick={() => {
            setPrevLook()
            playClickSound()
          }}
        >
          <MdKeyboardArrowLeft size={40} />
        </button>
        <button
          onClick={() => {
            setNextLook()
            playClickSound()
          }}
        >
          <MdKeyboardArrowRight size={40} />
        </button>
      </div>
    </div>
  )
}
