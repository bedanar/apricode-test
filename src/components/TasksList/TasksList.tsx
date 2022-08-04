import { observer } from 'mobx-react-lite';
import React from 'react';
import { TaskItem } from '../TaskItem';
import styles from './taskslist.module.scss';
import tasks from '../store/store'

export const  TasksList = observer(() =>  {
  return (
    <div className={styles.taskslist}>
      {
        tasks.tasks.map((task) => <TaskItem title={task.title} completed={task.completed} key={task.id} id={task.id} />)
      }
    </div>
  );
})
