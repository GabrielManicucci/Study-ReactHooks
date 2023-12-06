import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import NavLinks from "./components/navlinks/index.tsx"
import UseReducerComponent from "./components/usereducer/index.tsx"
import App from "./App.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/useReducer",
    element: <UseReducerComponent />
  }
])

export default function Routes() {
  return (
    <div className="rootContainer">
      <NavLinks />
      <RouterProvider router={router} />
    </div>
  )
}
