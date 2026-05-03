// Mock agencies for multi-tenant demo
export interface Agency {
  id: string
  name: string
  code: string
  type: "capital" | "municipal" | "district" | "subcounty"
  region: string
  logo: string
  primaryColor: string
}

export const agencies: Agency[] = [
  { id: "ag-kcca", name: "Kampala Capital City Authority", code: "KCCA", type: "capital", region: "Central", logo: "", primaryColor: "#2563eb" },
  { id: "ag-wakiso", name: "Wakiso Municipal Council", code: "WAK", type: "municipal", region: "Central", logo: "", primaryColor: "#059669" },
  { id: "ag-mukono", name: "Mukono Municipal Council", code: "MUK", type: "municipal", region: "Central", logo: "", primaryColor: "#d97706" },
  { id: "ag-jinja", name: "Jinja City Authority", code: "JIN", type: "capital", region: "Eastern", logo: "", primaryColor: "#7c3aed" },
  { id: "ag-mbarara", name: "Mbarara City Authority", code: "MBR", type: "capital", region: "Western", logo: "", primaryColor: "#dc2626" },
  { id: "ag-gulu", name: "Gulu Municipal Council", code: "GUL", type: "municipal", region: "Northern", logo: "", primaryColor: "#0891b2" },
]
