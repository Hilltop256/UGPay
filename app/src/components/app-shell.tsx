import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-screen w-full flex-col">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              UGPAY Government Payments Platform
            </span>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl p-6">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  )
}
