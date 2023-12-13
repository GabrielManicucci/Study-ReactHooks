import { useReducer } from "react"

type state = {
  nextName?: string
  age: number
}

type action = {
  type: string
  nextName?: string
}

function reducer(state: state, action: action) {
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

export default function ComponentUseReducer() {
  const [state, dispatch] = useReducer(reducer, { nextName: "teste", age: 0 })
  return (
    <div className="">
      <div className="">
        <h2 className="text-3xl font-semibold">Use Reducer React Hook</h2>

        <div className="mt-10">
          <input
            className="px-5 py-3 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="type it"
            onChange={e => {
              dispatch({ type: "change_name", nextName: e.target.value })
            }}
          />

          <p className="my-3">
            Hello{" "}
            <span className="text-[#6764ff] font-bold text-xl">
              {state.nextName}
            </span>{" "}
            You are{" "}
            <span className="text-[#6764ff] text-xl font-semibold">
              {state?.age}
            </span>
          </p>

          <button
            className="py-3 mr-5 px-5  rounded-lg bg-[#131313] hover:bg-[#6764ff] transition-all"
            onClick={() => dispatch({ type: "incremented_age" })}
          >
            add
          </button>
          <button
            className="py-3 mr-5 px-5  rounded-lg bg-[#131313] hover:bg-[#6764ff] transition-all"
            onClick={() => dispatch({ type: "false" })}
          >
            reduce
          </button>
        </div>
      </div>
    </div>
  )
}
