import { IoMoonOutline } from "react-icons/io5"
import { useEffect, useState } from "react"
import supabase from "../../services/supabaseClient"
import { Session } from "@supabase/supabase-js"

export default function Header() {
  const [value, setValue] = useState(true)
  const [logged, setLogged] = useState<Session | null>(null)
  const rightOrLeft = value ? "justify-end" : "justify-start"

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setLogged(session)

      // src used na img tag in line 71 this file
      // console.log(session?.user.user_metadata.avatar_url)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLogged(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const getURL = () => {
    let url =
      import.meta.env.VITE_VERCEL_ENV ?? // Set this to your site URL in production env.
      import.meta.env.VITE_VERCEL_URL ?? // Automatically set by Vercel.
      "http://localhost:3000/"
    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`
    return url
  }

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

          {!logged ? (
            <button
              className="bg-transparent p-3 hover:bg-[#6764ff] rounded-md transition-all"
              onClick={async () => {
                supabase.auth.signInWithOAuth({
                  provider: "github",
                  options: {
                    redirectTo: getURL()
                  }
                })
              }}
            >
              Sign in
            </button>
          ) : (
            <div className="flex">
              <img
                className="w-12 h-12 rounded-full bg-cover"
                src="https://avatars.githubusercontent.com/u/90355363?v=4"
                alt="Profile image"
              />
              <button
                className="border rounded-lg bg-transparent p-3 border-zinc-400 hover:border-[#6764ff] hover:bg-[#6764ff] ml-2"
                onClick={async () => {
                  supabase.auth.signOut()
                }}
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
