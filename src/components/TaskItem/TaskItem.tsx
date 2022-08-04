import React from 'react';
import TickIcon from '../../icons/tick';
import TrashIcon from '../../icons/trash';
import { Button, EColors } from '../Button';
import { Text } from '../Text';
import styles from './taskitem.module.scss';
import tasks from '../store/store'

interface ITaskItem {
  title: string,
  completed: boolean,
  id: number
}

export function TaskItem({title, completed, id} : ITaskItem) {
  return (
    <div className={completed ? styles.taskitemCompleted : styles.taskitem}>
      <Text size={24} bold>{title}</Text>
      <div className={styles.taskitem__buttons}>
        <Button onClick={() => tasks.completeTask(id)} backgroundColor={EColors.green}>
          <TickIcon />
        </Button>
        <Button onClick={() => tasks.removeTask(id)} backgroundColor={EColors.red}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
}
