import React, { useState } from 'react';
import styles from './filter.module.scss';

interface IFilter {
  title: string,
  onClick: () => void,
  checked?: boolean,
  setChecked?: (checked: boolean) => void
}
export function Filter({title, onClick, checked=false, setChecked = () => {}} : IFilter) {
  // const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
    onClick()
  }

  return (
    <div className={styles.filter}>
      <input type={'checkbox'} id={title} checked={checked}  onChange={handleClick} />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}
