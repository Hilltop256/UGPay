export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      taxpayers: {
        Row: {
          id: string
          created_at: string
          name: string
          tin: string
          status: "active" | "under_review" | "inactive"
          balance: number
          email: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          tin: string
          status?: "active" | "under_review" | "inactive"
          balance?: number
          email: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          tin?: string
          status?: "active" | "under_review" | "inactive"
          balance?: number
          email?: string
        }
      }
      transactions: {
        Row: {
          id: string
          created_at: string
          taxpayer_id: string
          type: string
          amount: number
          status: "completed" | "pending" | "failed"
          reference: string
        }
        Insert: {
          id?: string
          created_at?: string
          taxpayer_id: string
          type: string
          amount: number
          status?: "completed" | "pending" | "failed"
          reference: string
        }
        Update: {
          id?: string
          created_at?: string
          taxpayer_id?: string
          type?: string
          amount?: number
          status?: "completed" | "pending" | "failed"
          reference?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
