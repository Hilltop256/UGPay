import { create } from "zustand"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import type { AuthState, User } from "@/types/auth"

const hasSupabase = isSupabaseConfigured()

const DEMO_USERS: { email: string; password: string; user: User }[] = [
  {
    email: "admin@ugpay.gov",
    password: "demo123",
    user: {
      id: "usr_001",
      email: "admin@ugpay.gov",
      name: "Admin User",
      role: "admin",
    },
  },
  {
    email: "viewer@ugpay.gov",
    password: "demo123",
    user: {
      id: "usr_002",
      email: "viewer@ugpay.gov",
      name: "Viewer User",
      role: "viewer",
    },
  },
]

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true })

    if (hasSupabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        set({ isLoading: false })
        throw error
      }
      if (data.user) {
        const user: User = {
          id: data.user.id,
          email: data.user.email || "",
          name: data.user.user_metadata?.full_name || data.user.email || "",
          role: data.user.user_metadata?.role || "viewer",
        }
        set({
          user,
          token: data.session?.access_token || null,
          isAuthenticated: true,
          isLoading: false,
        })
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800))
      const match = DEMO_USERS.find(
        (u) => u.email === email && u.password === password
      )
      if (match) {
        const token = `tok_${Date.now()}`
        set({
          user: match.user,
          token,
          isAuthenticated: true,
          isLoading: false,
        })
        localStorage.setItem("auth_user", JSON.stringify(match.user))
      } else {
        set({ isLoading: false })
        throw new Error("Invalid email or password")
      }
    }
  },

  logout: async () => {
    if (hasSupabase) {
      await supabase.auth.signOut()
    }
    set({ user: null, token: null, isAuthenticated: false })
    localStorage.removeItem("auth_user")
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user })
  },
}))

export function initializeAuth() {
  if (hasSupabase) return
  const userStr = localStorage.getItem("auth_user")
  if (userStr) {
    try {
      const user = JSON.parse(userStr) as User
      useAuthStore.setState({ user, token: "demo", isAuthenticated: true })
    } catch {
      localStorage.removeItem("auth_user")
    }
  }
}
