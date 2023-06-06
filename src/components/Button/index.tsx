import { PropsWithChildren } from 'react'
import styles from './style.module.scss'

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  selected?: boolean
}

export const Button = ({
  children,
  selected = false,
  ...other
}: ButtonProps) => {
  return (
    <div
      {...other}
      className={[styles.wrapper, selected ? 'selected' : undefined].join(' ')}
    >
      {children}
    </div>
  )
}
