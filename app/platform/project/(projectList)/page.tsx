import { ProjectTable } from "./components/project-table"
import { ProjectHeader } from "./components/project-header"

export default function ProjectPage() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <ProjectHeader />
            <ProjectTable />
        </div>
    )
}
