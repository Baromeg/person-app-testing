import React from "react"

export default (props) => (
  <ul>
    {props.people
      ? props.people.map((people, i) => <li key={i}></li>)
      : undefined}
  </ul>
)
