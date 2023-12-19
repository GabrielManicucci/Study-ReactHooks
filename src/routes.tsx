import { Routes, Route } from "react-router-dom"
import UseStateComponent from "./components/useState/index.tsx"
import UseEffectComponent from "./components/useEffect/index.tsx"
import UseContextComponent from "./components/useContext/index.tsx"
import UseRefComponent from "./components/useRef/index.tsx"
import UseMemoComponent from "./components/useMemo/index.tsx"
import UseCallbackComponent from "./components/useCallback/index.tsx"
import UseLayoutEffectComponent from "./components/useLayoutEffect/index.tsx"
import ComponentUseReducer from "./components/usereducer/index.tsx"
import SubApp from "./subApp.tsx"
import App from "./App.tsx"

export default function RoutesComponent() {
  return (
    <div className="">
      <Routes>
        <Route path="/" Component={SubApp}>
          <Route path="/useState" Component={UseStateComponent} />
          <Route path="/useReducer" Component={ComponentUseReducer} />
          <Route path="/useEffect" Component={UseEffectComponent} />
          <Route path="/useCallback" Component={UseCallbackComponent} />
          <Route path="/useRef" Component={UseRefComponent} />
          <Route path="/useContext" Component={UseContextComponent} />
          <Route path="/useMemo" Component={UseMemoComponent} />
          <Route path="/useLayoutEffect" Component={UseLayoutEffectComponent} />
        </Route>
        <Route path="/login" Component={App} />
      </Routes>
    </div>
  )
}
