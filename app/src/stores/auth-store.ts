import { create } from "zustand"
import type { AuthState, User } from "@/types/auth"

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
    // Simulate network delay
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
      localStorage.setItem("auth_token", token)
      localStorage.setItem("auth_user", JSON.stringify(match.user))
    } else {
      set({ isLoading: false })
      throw new Error("Invalid email or password")
    }
  },

  logout: () => {
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    })
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user })
  },
}))

export function initializeAuth() {
  const token = localStorage.getItem("auth_token")
  const userStr = localStorage.getItem("auth_user")

  if (token && userStr) {
    try {
      const user = JSON.parse(userStr) as User
      useAuthStore.setState({ user, token, isAuthenticated: true })
    } catch {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("auth_user")
    }
  }
}
