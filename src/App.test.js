import { render, screen } from "@testing-library/react"
import App from "./App"
import { mount, shallow } from "enzyme"
import Counter from "./Components/Counter"

describe("Counter Testing", () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Counter />)

  })
  test("Render the tile of counter", () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app')
    // const { getByText } = render(<App />)
    // const linkElement = getByText('This is counter app')
    // expect(linkElement).toBeInTheDocument()
  })
  test("Render a button with text of 'increment'", () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })
  test("Render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe('0')
  })
  test("Render the click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })
  test("Render the click event of increment button and decrement counter value", () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('1')
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })
  test("Render the click event decrement counter value and stop at 0", () => {
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })
  
})
