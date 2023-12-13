import LinkRoute from "./links"
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
    id: 9
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
      "/useContext",
      "/useLayoutEffect"
    ]

    const result = () => {
      const href = hrefs.filter(href => href === pathName)
      const route = href.join(", ")
      return route
    }

    if (pathName === result()) setValue(pathName)
  }

  useEffect(myStyle)

  return (
    <nav className="h-screen border-r border-r-zinc-500 left-0 min-w-[256px]">
      <div className="flex flex-col pt-5 pr-4 pl-7">
        {linksArray.map(linkArray => (
          <LinkRoute
            onClickProp={myStyle}
            hover={
              value === linkArray.href
                ? { backgroundColor: "#605dff31", color: "#5f5dff" }
                : {}
            }
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
