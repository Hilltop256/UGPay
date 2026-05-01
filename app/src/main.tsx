import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import { initializeAuth } from "./stores/auth-store"
import { Toaster } from "sonner"
import "./index.css"

initializeAuth()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>
)
