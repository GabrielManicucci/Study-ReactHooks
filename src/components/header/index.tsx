import { IoMoonOutline } from "react-icons/io5"
import { useState } from "react"

export default function Header() {
  const [value, setValue] = useState(true)
  const rightOrLeft = value ? "justify-end" : "justify-start"

  return (
    <header className="w-full py-3 border-b border-b-zinc-500">
      <div className="flex justify-between items-center py-5 px-7">
        <h1 className="text-[38px] font-semibold">React Hooks Doc</h1>

        <div className="p-0 flex items-center justify-between">
          <div className="h-1 p-0 flex items-center mr-5">
            <div
              className={`w-16 bg-[#414141] rounded-3xl flex ${rightOrLeft}`}
            >
              <button
                className="rounded-3xl p-2"
                onClick={() => {
                  value ? setValue(false) : setValue(true)
                }}
              >
                <IoMoonOutline className="text-[#5f5dff]" size={24} />
              </button>
            </div>

            <input
              className="px-5 py-2 rounded-md w-56 ml-2"
              type="text"
              placeholder="Search"
            />
          </div>

          <div>
            <button className="bg-transparent p-3 hover:bg-[#6764ff] rounded-md transition-all">
              Sign in
            </button>
            <button className="border rounded-lg bg-transparent p-3 border-zinc-400 hover:border-[#6764ff] hover:bg-[#6764ff] ml-2">
              Sing up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
