import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface props {
  children: ReactNode
  onClickProp: () => void
  hover: object
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
      className="p-2 rounded-md mb-2 hover:bg-[#2e2e2e] transition-all font-medium text-[#605dff8a] hover:text-[#5f5dff]"
      onClick={onClickProp}
      style={hover}
      to={hrefProp}
    >
      {children}
    </Link>
  )
}
