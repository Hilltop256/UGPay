export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "viewer" | "editor"
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
}
