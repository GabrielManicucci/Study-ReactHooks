import { useLocation } from "react-router-dom"
import NavLinks from "./components/navlinks"
import { Outlet } from "react-router-dom"
import Introduction from "./components/introduction"

function App() {
  const location = useLocation()

  return (
    <div className="flex w-full">
      <NavLinks pathName={location.pathname} />
      <div className="px-12 py-10 w-full">
        {location.pathname === "/" ? <Introduction /> : <Outlet />}
      </div>
    </div>
  )
}

export default App
