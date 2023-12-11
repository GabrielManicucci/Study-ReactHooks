import { ReactNode } from "react"
import "./styles.css"
import { Link } from "react-router-dom"

interface props {
  children: ReactNode
  onClickProp: () => void
  hover: string
  hrefProp: string
}

export default function LinkRoute({
  onClickProp,
  hrefProp,
  children,
  hover
}: props) {
  return (
    <Link
      onClick={onClickProp}
      style={{ backgroundColor: hover }}
      to={hrefProp}
    >
      {children}
    </Link>
  )
}
