import React from "react"
import ReactDOM from "react-dom"
import ToDoList from "./ToDoList"
import { getQueriesForElement } from "@testing-library/react"

const render = (component) => {
  const root = document.createElement("div")
  ReactDOM.render(component, root)
  return getQueriesForElement(root)
}

test("Renders the correct contect", () => {


  const { getByText, getByLabelText } = render(<ToDoList />)
  // * Using ReactDOM
  // expect(root.querySelector("h1").textContent).toBe("TODOs")
  // expect(root.querySelector("label").textContent).toBe("What needs to be done?")
  // expect(root.querySelector("button").textContent).toBe("Add #1")
  // * Using Testnig-Library the long way
  // expect(getByText("TODOs")).not.toBeNull()
  // expect(getByLabelText("What needs to be done?")).not.toBeNull()
  // expect(getByText("Add #1")).not.toBeNull()
  // * Using Testing-Library the short way
  getByText("TODOs")
  // getByLabelText("What needs to be done?")
  getByText("Add #1")
})
