import LinkRoute from "./links"
import "./styles.css"
import { useEffect, useState } from "react"

interface PathName {
  pathName: string
}

const linksArray = [
  {
    title: "Introduction",
    href: "/",
    id: 1
  },
  {
    title: "useState",
    href: "/useState",
    id: 2
  },
  {
    title: "useReducer",
    href: "/useReducer",
    id: 3
  },
  {
    title: "useEffect",
    href: "/useEffect",
    id: 4
  },
  {
    title: "useRef",
    href: "/useRef",
    id: 5
  },
  {
    title: "useCallback",
    href: "/useCallback",
    id: 6
  },
  {
    title: "useContext",
    href: "/useContext",
    id: 7
  },
  {
    title: "useMemo",
    href: "/useMemo",
    id: 8
  },
  {
    title: "useLayoutEffect",
    href: "/useLayoutEffect",
    id: 8
  }
]

export default function NavLinks({ pathName }: PathName) {
  const [value, setValue] = useState("")

  const myStyle = () => {
    const hrefs = [
      "/",
      "/useState",
      "/useReducer",
      "/useRef",
      "/useEffect",
      "/useCallback",
      "/useMemo",
      "/useContext"
    ]

    const result = () => {
      const href = hrefs.filter(href => href === pathName)
      const route = href.join(", ")
      return route
    }

    if (pathName === result()) {
      setValue(pathName)
      console.log("Function working:", value)
    }
  }

  useEffect(myStyle)

  return (
    <nav>
      <div>
        {linksArray.map(linkArray => (
          <LinkRoute
            onClickProp={myStyle}
            hover={value === linkArray.href ? "#6764ff57" : ""}
            hrefProp={linkArray.href}
            key={linkArray.id}
          >
            {linkArray.title}
          </LinkRoute>
        ))}
      </div>
    </nav>
  )
}
