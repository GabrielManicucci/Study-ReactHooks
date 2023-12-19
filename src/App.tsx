import { useLocation } from "react-router-dom"
import Header from "./components/header"
import Login from "./components/login"

export default function App() {
  const location = useLocation()

  return <>{location.pathname === "/login" ? <Login /> : <Header />}</>
}
