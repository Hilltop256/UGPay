import { describe, it, expect, beforeEach } from "vitest"
import { useAuthStore } from "../auth-store"
import type { User } from "@/types/auth"

beforeEach(() => {
  useAuthStore.setState({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
  })
  localStorage.clear()
})

describe("auth store", () => {
  it("starts unauthenticated", () => {
    const state = useAuthStore.getState()
    expect(state.isAuthenticated).toBe(false)
    expect(state.user).toBeNull()
  })

  it("logs in with valid credentials", async () => {
    await useAuthStore.getState().login("admin@ugpay.gov", "demo123")
    const state = useAuthStore.getState()
    expect(state.isAuthenticated).toBe(true)
    expect(state.user).toEqual({
      id: "usr_001",
      email: "admin@ugpay.gov",
      name: "Admin User",
      role: "admin",
    })
    expect(state.token).toBeDefined()
  })

  it("throws on invalid credentials", async () => {
    await expect(
      useAuthStore.getState().login("wrong@test.com", "wrong")
    ).rejects.toThrow("Invalid email or password")
  })

  it("logs out and clears state", async () => {
    await useAuthStore.getState().login("admin@ugpay.gov", "demo123")
    expect(useAuthStore.getState().isAuthenticated).toBe(true)

    useAuthStore.getState().logout()
    const state = useAuthStore.getState()
    expect(state.isAuthenticated).toBe(false)
    expect(state.user).toBeNull()
    expect(state.token).toBeNull()
  })

  it("persists auth to localStorage on login", async () => {
    await useAuthStore.getState().login("admin@ugpay.gov", "demo123")
    expect(localStorage.getItem("auth_token")).toBeDefined()
    expect(localStorage.getItem("auth_user")).toBeDefined()
  })

  it("clears localStorage on logout", async () => {
    await useAuthStore.getState().login("admin@ugpay.gov", "demo123")
    useAuthStore.getState().logout()
    expect(localStorage.getItem("auth_token")).toBeNull()
    expect(localStorage.getItem("auth_user")).toBeNull()
  })

  it("sets user directly", () => {
    const user: User = {
      id: "usr_999",
      email: "test@test.com",
      name: "Test User",
      role: "viewer",
    }
    useAuthStore.getState().setUser(user)
    expect(useAuthStore.getState().user).toEqual(user)
    expect(useAuthStore.getState().isAuthenticated).toBe(true)
  })
})
