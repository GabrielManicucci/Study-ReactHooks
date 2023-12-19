import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import RoutesComponent from "./routes.tsx"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <RoutesComponent />
    </BrowserRouter>
  </React.StrictMode>
)
