import React, {ChangeEvent} from 'react';
import styles from './inputblock.module.scss';
import { Button, EColors } from '../Button';
import tasks from '../store/store'

export function InputBlock() {
  const [value, onChange] = React.useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }
  return (
    <div className={styles.inputblock}>
      <input type="text" placeholder='Add a new task...' value={value} onChange={handleChange} />
      {
        value === '' ? 
        <Button backgroundColor={EColors.green8} onClick={() => tasks.addTask({title: value})}>Add a task</Button>
        :
        <Button backgroundColor={EColors.green} onClick={() => tasks.addTask({title: value})}>Add a task</Button>
      }
      {/* <Button backgroundColor={EColors.white} color={EColors.black} onClick={() => tasks.fetchTasks()}>Fetch tasks</Button> */}
    </div>
  );
}
