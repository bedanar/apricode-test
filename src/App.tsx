import React from 'react';
import styles from './App.module.scss';
import { Filter } from './components/Filter';
import { InputBlock } from './components/InputBlock';
import { Layout } from './components/Layout';
import { TasksList } from './components/TasksList';
import { Text } from './components/Text'
import tasks from './components/store/store'

function App() {
  const [completeChecked, setCompleteChecked] = React.useState(false)
  const [incompleteChecked, setIncompleteChecked] = React.useState(false)
  const filterCompletedTasks = () => {
    tasks.tasks = completeChecked ? tasks.showTasks : tasks.tasks.filter(task => task.completed)
  }
  const filterIncompletedTasks = () => {
    tasks.tasks = incompleteChecked ? tasks.showTasks : tasks.tasks.filter(task => !task.completed)
  }
  return (
    <Layout>
      <div className={styles.app}>
        <Text As='h1' size={36}>Task Manager</Text>
        <InputBlock />
      </div>
      <div className={styles.filter}>
        {/* <Filter title={'All'} onClick={() => tasks.getAll()} /> */}
        <Filter title={'Completed Tasks'} checked={completeChecked} setChecked={setCompleteChecked} onClick={filterCompletedTasks} />
        <Filter title={'Incomplited tasks'} checked={incompleteChecked} setChecked={setIncompleteChecked} onClick={filterIncompletedTasks} />
      </div>
      <TasksList />
    </Layout>
  );
}

export default App;
