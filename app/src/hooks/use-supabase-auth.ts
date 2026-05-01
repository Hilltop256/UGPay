import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAuthStore } from "@/stores/auth-store"
import type { User } from "@/types/auth"

export function useSupabaseAuth() {
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const user: User = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata?.full_name || session.user.email || "",
          role: session.user.user_metadata?.role || "viewer",
        }
        setUser(user)
      }
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const user: User = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata?.full_name || session.user.email || "",
          role: session.user.user_metadata?.role || "viewer",
        }
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [setUser])
}
