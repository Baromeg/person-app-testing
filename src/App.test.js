import { render, screen } from '@testing-library/react';
import App from './App';
import PersonList from "./PersonList"
import { shallow } from "enzyme"

describe("App", () => {
  let appWrapper
  beforeAll(() => {
    appWrapper = shallow(<App />)
  })

  it("Renders a person list", () => {
    const personList = appWrapper.find(PersonList)

    expect(personList).toHaveLength(1)
  })

  it("Has state", () => {
    const appState = appWrapper.state()

    expect(appState).not.toBeNull()
  })

  it("Has a people property on state", () => {
    const appState = appWrapper.state()

    expect(appState.people).toBeDefined()
  })
  
  it("Passes people property of state to personList as prop", () => {
    const personList = appWrapper.find(PersonList)

    expect(personList.props().people).toEqual(appWrapper.state().people)
  })
})
