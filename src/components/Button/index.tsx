import { PropsWithChildren } from 'react'
import styles from './style.module.scss'
import { useAppSelector } from 'hooks/store'
import { playClickSound } from 'utils/playClickSound'
import { RootState } from 'store/index'

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  selected?: boolean
  offClickSound?: boolean
}

export const Button = ({
  children,
  selected = false,
  onClick,
  offClickSound = false,
  ...other
}: ButtonProps) => {
  const soundIsOn = useAppSelector((state: RootState) => state.app.soundsIsOn)

  return (
    <div
      {...other}
      onDoubleClick={(e) => {
        e.preventDefault()
      }}
      onMouseDown={(e) => {
        e.preventDefault()
      }}
      onSelect={(e) => {
        e.preventDefault()
      }}
      onClick={() => {
        if (soundIsOn && !offClickSound) playClickSound()
        onClick()
      }}
      className={selected ? styles.wrapperSelected : styles.wrapper}
    >
      {children}
    </div>
  )
}
