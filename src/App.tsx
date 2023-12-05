import { useReducer } from "react"
import "./App.css"

type ActionObject = {
  type: string
}
type StateObject = {
  age: number
}

function reducer(state: StateObject, action: ActionObject) {
  switch (action.type) {
    case "true":
      return {
        age: state.age + 1
      }
    case "false":
      return {
        age: state.age - 1
      }
  }
  throw Error("Unknown action: " + action.type)
}

function App() {
  const [state, dispatch] = useReducer(reducer, { age: 42 })
  return (
    <>
      <h2>React Hooks Study</h2>

      <div>
        <p>You are {state?.age} </p>

        <button onClick={() => dispatch({ type: "true" })}>add</button>
        <button onClick={() => dispatch({ type: "false" })}>reduce</button>
      </div>
    </>
  )
}

export default App
