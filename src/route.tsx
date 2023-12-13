import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.tsx"
import UseStateComponent from "./components/useState/index.tsx"
import UseEffectComponent from "./components/useEffect/index.tsx"
import UseContextComponent from "./components/useContext/index.tsx"
import UseRefComponent from "./components/useRef/index.tsx"
import UseMemoComponent from "./components/useMemo/index.tsx"
import UseCallbackComponent from "./components/useCallback/index.tsx"
import UseLayoutEffectComponent from "./components/useLayoutEffect/index.tsx"
import ComponentUseReducer from "./components/usereducer/index.tsx"

export default function RoutesComponent() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App}>
            <Route path="/useState" Component={UseStateComponent} />
            <Route path="/useReducer" Component={ComponentUseReducer} />
            <Route path="/useEffect" Component={UseEffectComponent} />
            <Route path="/useCallback" Component={UseCallbackComponent} />
            <Route path="/useRef" Component={UseRefComponent} />
            <Route path="/useContext" Component={UseContextComponent} />
            <Route path="/useMemo" Component={UseMemoComponent} />
            <Route
              path="/useLayoutEffect"
              Component={UseLayoutEffectComponent}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
