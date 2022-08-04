import { makeAutoObservable } from "mobx";

class Tasks {
    tasks = [
        {id: 100000000, title: 'Do a react mobx testwork', completed: false},
        {id: 200000000, title: 'Finish reading a book', completed: false},
        {id: 300000000, title: 'Go out for a walk', completed: false},
    ]
    showTasks = this.tasks
    constructor () {
        makeAutoObservable(this)
    }
    addTask(task) {
        this.tasks.push(task)
        this.showTasks.push(task)
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        this.showTasks = this.showTasks.filter(task => task.id !== id)
    }
    completeTask(id) {
        this.tasks = this.tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
        this.showTasks = this.showTasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
    }
    fetchTasks() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            this.tasks = [...this.tasks, ...json]
            this.showTasks = [...this.showTasks, ...json]
        })
    }
}
export default new Tasks()