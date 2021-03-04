import React, { Component, useState } from "react"
import PersonListImp from "./PersonListImp"
// ! This testing is done on implementation and not on behaviour
class ImplementationTest extends Component {
  state = { people: [] }
  render() {
    return (
      <div className='ImplementationTest'>
        <PersonListImp people={this.state.people} />
      </div>
    )
  }
}

export default ImplementationTest
