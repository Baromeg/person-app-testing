import React from "react"
import ReactDOM from "react-dom"
import ToDoList from "./ToDoList"

test("Renders the correct contect", () => {
  const root = document.createElement("div")
  ReactDOM.render(<ToDoList />, root)

  expect(root.querySelector("h1").textContent).toBe("TODOs")
  expect(root.querySelector("label").textContent).toBe("What needs to be done?")
})
