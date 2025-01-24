"use client"

import { useRouter } from 'next/navigation'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Search, Trash2 } from "lucide-react"

interface Project {
    id: string
    address: string
    city: string
    state: string
    zipCode: string
    tags: string[]
    created: string
}

const projects: Project[] = [
    {
        id: "1",
        address: "6620 South Lancaster Road",
        city: "Dallas",
        state: "TX",
        zipCode: "75241",
        tags: [],
        created: "12/31/2024"
    },
    {
        id: "2",
        address: "6620 South Lancaster Road",
        city: "Dallas",
        state: "TX",
        zipCode: "75241",
        tags: [],
        created: "12/31/2024"
    },
    {
        id: "3",
        address: "1204 E Broadway Ave",
        city: "Fort Worth",
        state: "TX",
        zipCode: "76104",
        tags: [],
        created: "11/14/2024"
    },
    {
        id: "4",
        address: "3930 Maybeth St",
        city: "Dallas",
        state: "TX",
        zipCode: "75212",
        tags: ["Class"],
        created: "08/23/2024"
    }
]

export function ProjectTable() {

    const router = useRouter()

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Address</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.id} onClick={() => router.push(`/platform/project/${project.id}`)}>
                            <TableCell className="font-medium">
                                <div>
                                    {project.address}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {project.city}, {project.state} {project.zipCode}
                                </div>
                            </TableCell>
                            <TableCell>
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="mr-1">
                                        {tag}
                                    </Badge>
                                ))}
                            </TableCell>
                            <TableCell>{project.created}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Search className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
