import { useLocation } from "react-router-dom"
import "./App.css"
import NavLinks from "./components/navlinks"
import { Outlet } from "react-router-dom"
import Introduction from "./components/introduction"

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <NavLinks pathName={location.pathname} />
      <div className="contents">
        {location.pathname === "/" ? <Introduction /> : <Outlet />}
      </div>
    </div>
  )
}

export default App
