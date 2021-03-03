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
    // expect(shallow(<PersonList people={[]} />).find("li")).toHaveLength(0)
    // * - Extreme refactoring example if the variables are only used once
    const people = []
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find("li")

    expect(peopleListItems).toHaveLength(0)
  })

  it("Renders one li elements 1 person exists", () => {
    const people = [{ firstName: "Alan", lastName: "Turing" }]
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find("li")

    expect(peopleListItems).toHaveLength(1)
  })
  it("Renders one li element for each person that exists", () => {
    const people = [
      { firstName: "Alan", lastName: "Turing" },
      { firstName: "Chevy", lastName: "Chase" },
    ]
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find("li")

    expect(peopleListItems).toHaveLength(2)
  })
  it("Renders the first and last name of a person", () => {
    const people = [{ firstName: "Jane", lastName: "Curtin" }]
    const personListWrapper = shallow(<PersonList people={people} />)
    // const personListItems = personListWrapper.find("li")

    expect(personListWrapper.find("li").text()).toContain(people[0].firstName)
    expect(personListWrapper.find("li").text()).toContain(people[0].lastName)
  })
  
})
