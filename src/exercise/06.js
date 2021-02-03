// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null);
  const [usernameInput, setUsernameInput] = React.useState('');
  // 🐨 add a submit event handler here (`handleSubmit`).
  const inputRef = React.useRef(null)
  function handleSubmit(event) {
    event.preventDefault();
    // const username = event.target.elements.usernameInput.value
    // extra credit 1
    console.log(inputRef);


  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase();
    // setError(isValid ? null : 'Username must be lowercase')
    setUsernameInput(value.toLowerCase())
    
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput" >Username:</label>
        {/* <input id="usernameInput" type="text" /> */}
        {/* <input ref={inputRef} onChange={(e)=>handleChange(e)} type="text" /> */}
        <input id="usernameInput" ref={inputRef} onChange={(e)=>handleChange(e)} value={usernameInput} type="text" />
      </div>
      {/* <button disable={Boolean(error)} type="submit">Submit</button> */}
      <button  type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
