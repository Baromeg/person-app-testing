import React from "react"
import Counter from ".Components/Counter"
import "./App.css"
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
