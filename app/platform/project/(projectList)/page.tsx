"use client"

import React, { useState } from "react"
import { ProjectTable } from "./components/project-table"
import { ProjectHeader } from "./components/project-header"

export interface ProjectPageProps {
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export default function ProjectPage() {

    const [propertyAddress, setPropertyAddress] = useState<ProjectPageProps>({
        streetNumber: '',
        streetName: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    return (
        <div className="flex flex-col gap-6 py-16 px-48">
            <ProjectHeader />
            <ProjectTable />
        </div>
    )
}
