import React from 'react'
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Robert"
  const age = "21"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "Anastasia" age = {26+10}/>
      <Hello name = {name} age = {age}/>
    </div>
  )
}

export default App