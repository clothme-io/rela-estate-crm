"use client"

// import { Button } from "@/components/ui/button"
// import {
// DropdownMenu,
// DropdownMenuContent,
// DropdownMenuItem,
// DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Filter, MoreVertical, Tags } from "lucide-react"
// import { MoreVertical } from "lucide-react"
import { NewProjectDialog } from "../../(newProject)/newPage"

export function ProjectHeader() {
    return (
        <div className="flex items-center justify-between">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            </div>
            <div className="flex items-center gap-2">
                {/* <Button variant="outline" size="sm" className="h-8">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button> */}
                {/* <Button variant="outline" size="sm" className="h-8">
                    <Tags className="mr-2 h-4 w-4" />
                    Modify tags
                </Button> */}

                <NewProjectDialog />

                {/*<DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                     <DropdownMenuContent align="end">
                        <DropdownMenuItem>Import Projects</DropdownMenuItem>
                        <DropdownMenuItem>Export Projects</DropdownMenuItem>
                    </DropdownMenuContent> 
                </DropdownMenu> */}
            </div>
        </div >
    )
}
