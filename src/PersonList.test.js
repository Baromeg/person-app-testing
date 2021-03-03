import React from "react"
import { shallow } from "enzyme"

import PersonList from "./PersonList"

describe("PersonList", () => {
  it("Renders a ul element", () => {
    const personListWrapper = shallow(<PersonList />)
    const peopleListUls = personListWrapper.find("ul")
    expect(peopleListUls).toHaveLength(1)
  })

  it("Renders no li elements with no people exist", () => {
    const people = []
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find("li")

    expect(peopleListItems).toHaveLength(0)
  })

  it("Renders li elements 1 person", () => {
    const people = [{ firstName: "Alan", lastName: "Turing" }]
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find("li")

    expect(peopleListItems).toHaveLength(1)
  })
})
