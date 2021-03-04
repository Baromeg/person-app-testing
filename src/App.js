import React from "react"
import "./App.css"
import Counter from "./Components/Counter"
import ToDoList from "./Components/ToDoList"

const App = () => {
  return (
    <div className='App'>
      <Counter />
      <ToDoList />
    </div>
  )
}

export default App
