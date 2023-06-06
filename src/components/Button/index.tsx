import { PropsWithChildren } from 'react'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../hooks/store'
import { playClickSound } from '../../utils/playClickSound'

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  selected?: boolean
}

export const Button = ({
  children,
  selected = false,
  onClick,
  ...other
}: ButtonProps) => {
  const soundIsOn = useAppSelector((state) => state.app.soundsIsOn)

  return (
    <div
      {...other}
      onDoubleClick={(e) => {
        e.preventDefault()
      }}
      onMouseDown={(e) => {
        e.preventDefault()
      }}
      onClick={() => {
        if (soundIsOn) playClickSound()
        onClick()
      }}
      className={selected ? styles.wrapperSelected : styles.wrapper}
    >
      {children}
    </div>
  )
}
