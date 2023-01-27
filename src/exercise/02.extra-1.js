// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(props.children, child => {
    return allowedTypes.includes(child.type)
      ? React.cloneElement(child, {on, toggle})
      : child
  })
}

const ToggleOn = ({on, children}) => {
  return on ? children : null
}

const ToggleOff = ({on, children}) => {
  return on ? null : children
}

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

const ToggleButton = ({on, toggle, ...props}) => (
  <Switch on={on} onClick={toggle} {...props} />
)

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
