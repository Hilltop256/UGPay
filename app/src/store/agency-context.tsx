import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Agency } from "./agencies"
import { agencies } from "./agencies"

interface AgencyContextType {
  agencies: Agency[]
  currentAgency: Agency | null
  setAgency: (id: string) => void
}

const AgencyContext = createContext<AgencyContextType | null>(null)

export function AgencyProvider({ children }: { children: ReactNode }) {
  const [currentAgency, setCurrentAgency] = useState<Agency | null>(agencies[0])

  const setAgency = useCallback((id: string) => {
    const agency = agencies.find((a) => a.id === id)
    if (agency) setCurrentAgency(agency)
  }, [])

  return (
    <AgencyContext.Provider value={{ agencies, currentAgency, setAgency }}>
      {children}
    </AgencyContext.Provider>
  )
}

export function useAgency() {
  const ctx = useContext(AgencyContext)
  if (!ctx) throw new Error("useAgency must be used within AgencyProvider")
  return ctx
}
