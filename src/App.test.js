import { render, screen } from '@testing-library/react';
import App from './App';
import PersonList from "./PersonList"
import { shallow } from "enzyme"

describe("App", () => {
  it("Renders without crashing", () => {
    const appWrapper = shallow(<App />)
  })

  it("Renders a person list", () => {
    const appWrapper = shallow(<App />)
    const personList = appWrapper.find(PersonList)

    expect(personList).toHaveLength(1)
  })

  it("Renders the state of app ", () => {
    const appWrapper = shallow(<App />)
    const appState = appWrapper.state()
  })
  
})
