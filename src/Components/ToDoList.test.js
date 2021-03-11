import React from "react"
import ToDoList from "./ToDoList"
import { render, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// * Manual Render
// const render = (component) => {
//   const root = document.createElement("div")
//   ReactDOM.render(component, root)
//   return getQueriesForElement(root)
// }

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
  getByLabelText("What needs to be done?")
  getByText("Add #1")
})

test('allows users to add items to their list', () => {
  const { getByText, getByLabelText } = render(<ToDoList />)
  const input = getByLabelText("What needs to be done?")
  fireEvent.change(input, { target: { value: "RTL Presentation Slides" } })
  fireEvent.click(getByText("Add #1"))

  getByText("RTL Presentation Slides")
  getByText("Add #2")
})

