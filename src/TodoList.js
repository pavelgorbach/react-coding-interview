import React, { useState } from 'react'

const DEFAULT_TASKS = [
  {id: 1, text: 'First Task'},
  {id: 2, text: 'Second Task'}
]

let id = 3

export default function App() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS)
  const [input, setInput] = useState('')

  const onChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const onSubmit = () => {
    if(!input) return
    setTasks((tasks) => [...tasks, {id: id++, text: input}])
    setInput('')
  }

  const onDelete = (taskId) => {
    const filtered = tasks.filter(({ id }) => id !== Number(taskId))
    setTasks(filtered)
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" name="task" placeholder="Add your task" value={input} onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>

      <ul>
        {tasks.map(({id, text}) => (
          <li key={id}>
            <div>{text}</div>
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
