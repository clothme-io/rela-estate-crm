"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    // DropdownMenu,
    // DropdownMenuContent,
    // DropdownMenuItem,
    // DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    ClipboardCheck,
    Calculator,
    // PiggyBank,
    // ChevronDown,
    // LayoutPanelTop,
    // Map
} from "lucide-react"
import LandDueDiligence from "../(tabs)/land-due-diligence"
import UnderWritingComponent from "../(tabs)/under-writing"

type Tab = 'due-diligence' | 'New Construction' | 'Renovation' | 'project-management' | 'gis-map'

export function DashboardTabs() {

    const [activeTab, setActiveTab] = useState<Tab>('due-diligence')

    return (
        <div className="flex flex-col w-full">
            <nav className="flex items-center gap-4 py-4 bg-white"> {/* border-b */}
                {/* Due Diligence */}
                <Button
                    variant="ghost"
                    className={`flex items-center gap-2 ${activeTab === 'due-diligence' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                    onClick={() => setActiveTab('due-diligence')}
                >
                    <ClipboardCheck className="h-4 w-4" />
                    <span>Land Due Diligence</span>
                </Button>

                {/* Project Calc */}
                <Button
                    variant="ghost"
                    className={`flex items-center gap-2 ${activeTab === 'New Construction' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                    onClick={() => setActiveTab('New Construction')}
                >
                    <Calculator className="h-4 w-4" />
                    <span>New Construction (Asumption)</span>
                </Button>

                {/* <Button
                    variant="ghost"
                    className={`flex items-center gap-2 ${activeTab === 'Renovation' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                    onClick={() => setActiveTab('Renovation')}
                >
                    <Calculator className="h-4 w-4" />
                    <span>Rehab (Assumption)</span>
                </Button> */}

                {/* Budget Dropdown */}
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            variant="ghost" 
                            className={`flex items-center gap-2 ${activeTab === 'budget' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                            onClick={() => setActiveTab('budget')}
                        >
                            <PiggyBank className="h-4 w-4" />
                            <span>Budget</span>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                        <DropdownMenuItem>
                            Overview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Income
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Expenses
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Reports
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu> */}

                {/* Project Management */}
                {/* <Button 
                    variant="ghost" 
                    className={`flex items-center gap-2 ${activeTab === 'project-management' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                    onClick={() => setActiveTab('project-management')}
                >
                    <LayoutPanelTop className="h-4 w-4" />
                    <span>Project Management</span>
                </Button> */}

                {/* GIS Map */}
                {/* <Button 
                    variant="ghost" 
                    className={`flex items-center gap-2 ${activeTab === 'gis-map' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                    onClick={() => setActiveTab('gis-map')}
                >
                    <Map className="h-4 w-4" />
                    <span>GIS Map</span>
                </Button> */}
            </nav>

            {/* Content area - can be populated based on selected tab */}
            <div className="">
                {activeTab === 'due-diligence' && <LandDueDiligence />}
                {activeTab === 'New Construction' && <UnderWritingComponent />}
                {activeTab === 'Renovation' && <div>Budget Content</div>}
                {activeTab === 'project-management' && <div>Project Management Content</div>}
                {activeTab === 'gis-map' && <div>GIS Map Content</div>}
            </div>
        </div>
    )
}