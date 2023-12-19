import supabase from "../../services/supabaseClient"
// import { Session } from "@supabase/supabase-js"
// import { useEffect, useState } from "react"

export default function Login() {
  // const [logged, setLogged] = useState<Session | null>(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setLogged(session)

  //     // src used na img tag in line 71 this file
  //     // console.log(session?.user.user_metadata.avatar_url)
  //   })

  //   const {
  //     data: { subscription }
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setLogged(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  return (
    <div>
      <h2>React Hooks Doc</h2>

      <div>
        <button
          className="bg-transparent p-3 hover:bg-[#6764ff] rounded-md transition-all"
          onClick={async () => {
            supabase.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: window.location.origin
              }
            })
          }}
        >
          Sign in
        </button>
        <button
          className="bg-transparent p-3 hover:bg-[#6764ff] rounded-md transition-all"
          onClick={async () => {
            supabase.auth.signInWithOAuth({
              provider: "google",
              options: {
                redirectTo: window.location.origin
              }
            })
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  )
}
