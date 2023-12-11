import { useReducer } from "react"
import "./styles.css"

type ActionObject = {
  type: string
  nextName?: string
}

type StateObject = {
  age: number
  nextName: string | undefined
}

function reducer(state: StateObject, action: ActionObject) {
  switch (action.type) {
    case "incremented_age":
      return {
        age: state.age + 1,
        nextName: state.nextName
      }
    case "change_name":
      return {
        age: state.age,
        nextName: action.nextName
      }
    case "false":
      return {
        age: state.age - 1,
        nextName: state.nextName
      }
  }
  throw Error("Unknown action: " + action.type)
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, { nextName: "teste", age: 0 })
  return (
    <div className="useReducer">
      <div className="Wrapper">
        <h2>Use Reducer React Hook</h2>

        <div className="card">
          <input
            type="text"
            name=""
            id=""
            placeholder="type it"
            onChange={e => {
              dispatch({ type: "change_name", nextName: e.target.value })
            }}
          />

          <p>
            Hello <span>{state.nextName}</span> You are {state?.age}
          </p>

          <button onClick={() => dispatch({ type: "incremented_age" })}>
            add
          </button>
          <button onClick={() => dispatch({ type: "false" })}>reduce</button>
        </div>
      </div>
    </div>
  )
}
