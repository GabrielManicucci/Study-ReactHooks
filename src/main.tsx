import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/header/index.tsx"
import Routes from "./route.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Routes />
  </React.StrictMode>
)
