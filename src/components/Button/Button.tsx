import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames'

export enum EColors {
  black = 'black',
  green = 'green',
  white = 'white',
  red = 'red',
  beige = 'beige',
  transparent = 'transparent',
  green8 = 'green8'
}

interface IButtonProps {
  children: React.ReactNode,
  onClick?: () => void,
  color?: EColors,
  backgroundColor?: EColors,
  size?: number,
}

const NOOP = () => {}

export function Button({children, onClick = NOOP, color = EColors.white, backgroundColor, size} : IButtonProps) {
  const classes = classNames(
    styles[color],
    styles[`bg-${backgroundColor}`],
    styles[`s${size}`]
  )
  return (
    <button onClick={onClick} className={classes}>{children}</button>
  );
}
