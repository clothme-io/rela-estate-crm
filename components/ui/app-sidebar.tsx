"use client"

import * as React from "react"
import {
    // AudioWaveform,
    BookOpen,
    // Bot,
    // Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
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
    // SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavResources } from "./nav-resources"
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
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        }
    ],
    navMain: [
        {
            title: "Project",
            url: "#",
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
        //     title: "Models",
        //     url: "#",
        //     icon: Bot,
        //     items: [
        //         {
        //             title: "Genesis",
        //             url: "#",
        //         },
        //         {
        //             title: "Explorer",
        //             url: "#",
        //         },
        //         {
        //             title: "Quantum",
        //             url: "#",
        //         },
        //     ],
        // },
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
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
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
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
            items: []
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
            items: []
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
            items: []
        },
    ],
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
                    <NavResources projects={data.projects} />
                </div>
            </SidebarContent>
            {/* <SidebarFooter> */}
            {/* <NavUser user={data.user} /> */}
            {/* </SidebarFooter> */}
            <SidebarRail />
        </Sidebar>
    )
}
