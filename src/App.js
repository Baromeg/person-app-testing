import React, { Component, useState } from "react"
import PersonList from "./PersonList"

class App extends Component {
  // const [state, setstate] = useState({ })
  state = { people: []}
  render() {
    return (
      <div className='App'>
        <PersonList people={this.state.people} />
      </div>
    )
  }
}

export default App;
