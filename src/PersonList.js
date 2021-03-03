import React from "react"

export default (props) => {
  if (props.people && props.people.length == 1) {
    return (
      <ul>
        <li></li>
      </ul>
    )
  }
  return <ul></ul>
}
