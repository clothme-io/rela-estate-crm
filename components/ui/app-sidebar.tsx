"use client"

import * as React from "react"
import {
    BookOpen,
    ReceiptText,
    Frame,
    GalleryVerticalEnd,
    PieChart,
    // Settings2,
    SquareTerminal,
    Mails,
} from "lucide-react"
import { TeamSwitcher } from "./team-switcher"
// import { NavUser } from "./nav-user"
// import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    // SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavResources } from "./nav-resources"
import { NavUser } from "./nav-user"
// import { NavProjects } from "./nav-projects"


// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Real Estate SaaS",
            logo: GalleryVerticalEnd,
            plan: "",
        }
    ],
    navMain: [
        {
            title: "Land",
            url: "/platform/project",
            icon: SquareTerminal,
            isActive: true,
            items: [
                //     {
                //         title: "History",
                //         url: "#",
                //     },
                //     {
                //         title: "Starred",
                //         url: "#",
                //     },
                //     {
                //         title: "Settings",
                //         url: "#",
                //     },
            ],
        },
        // {
        //     title: "CRM",
        //     url: "#",
        //     icon: Settings2,
        //     items: [
        //     {
        //         title: "General",
        //         url: "#",
        //     },
        //     {
        //         title: "Team",
        //         url: "#",
        //     },
        //     {
        //         title: "Billing",
        //         url: "#",
        //     },
        //     {
        //         title: "Limits",
        //         url: "#",
        //     },
        //     ],
        // },
    ],
    projects: [
        {
            name: "Budget",
            url: "#",
            icon: Frame,
            items: []
        },
        {
            name: "Accounting",
            url: "#",
            icon: ReceiptText,
            items: []
        },
        {
            name: "Schedule",
            url: "#",
            icon: PieChart,
            items: []
        },
        {
            name: "Mail",
            url: "#",
            icon: Mails,
            items: []
        },
    ],
}

const dataResource = {
    nav: [
        {
            title: "Education",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent className="pt-10">
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <div className="">
                    <NavResources items={dataResource.nav} />
                </div>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
