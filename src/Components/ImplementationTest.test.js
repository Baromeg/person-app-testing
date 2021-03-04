import { render, screen } from "@testing-library/react"
import ImplementationTest from "./ImplementationTest"
import PersonListImp from "./PersonListImp"
import { shallow } from "enzyme"

describe("ImplementationTest", () => {
  let appWrapper
  beforeAll(() => {
    appWrapper = shallow(<ImplementationTest />)
  })

  it("Renders a person list", () => {
    const personList = appWrapper.find(PersonListImp)

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
    const personList = appWrapper.find(PersonListImp)

    expect(personList.props().people).toEqual(appWrapper.state().people)
  })
})
