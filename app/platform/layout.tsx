// import { AppSidebar } from "@/components/app-sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { NavUser } from "@/components/ui/nav-user";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="h-16 shrink-0 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-slate-50">
                    <div className="flex items-center justify-between px-4">
                        <div className="flex-1">
                            <SidebarTrigger className="-ml-1" />
                        </div>

                        <div className="">
                            <NavUser user={data.user} />
                        </div>

                    </div>
                </header>
                <main className="min-h-screen bg-white">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}