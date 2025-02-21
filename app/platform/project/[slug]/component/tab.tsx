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

    // Land States
    const [landAsking, setLandAsking] = useState<number>(0);
    const [zoningRight, setZoningRight] = useState<number>(0);
    const [sqft, setSqft] = useState<number>(0);
    const [salesComps, setSalesComps] = useState<number>(0);
    const [rentalComps, setRentalComps] = useState<number>(0);
    const [unitsProposed, setUnitsProposed] = useState<number>(0);

    // Architectural and Fees States
    const [architecturalDesignFees, setArchitecturalDesignFees] = useState<number>(0);
    // const [inspectionFees, setInspectionFees] = useState<number>(0);
    const [landRealEstateCosts, setLandRealEstateCosts] = useState<number>(0);
    // const [equipmentRental, setEquipmentRental] = useState<number>(0);
    const [loanInterestAccountingFees, setLoanInterestAccountingFees] = useState<number>(0);
    // const [projectManagement, setProjectManagement] = useState<number>(0);
    // const [insuranceProfessionalDues, setInsuranceProfessionalDues] = useState<number>(0);
    // const [localStateTaxes, setLocalStateTaxes] = useState<number>(0);
    // const [advertisingPublicRelations, setAdvertisingPublicRelations] = useState<number>(0);
    // 
    const [finish, setfinish] = useState<number>(0);

    // Financing States
    const [hardMoney, setHardMoney] = useState<boolean>(false);
    const [investorMoney, setInvestorMoney] = useState<boolean>(false);
    const [investorEquity, setInvestorEquity] = useState<boolean>(false);
    const [loanAmountHM, setLoanAmountHM] = useState<number>(0);
    const [loanAmountIM, setLoanAmountIM] = useState<number>(0);
    const [equity, setEquity] = useState<number>(0);
    const [pointsHM, setPointsHM] = useState<number>(0);
    const [pointsIM, setPointsIM] = useState<number>(0);
    const [arpHM, setArpHM] = useState<number>(0);
    const [arpIM, setArpIM] = useState<number>(0);
    const [adminFeesHM, setAdminFeesHM] = useState<number>(0);
    const [amortization, setAmortization] = useState<number>(0);

    // Closing States
    const [realtorCommission, setRealtorCommission] = useState<number>(0);
    const [closingCost, setClosingCost] = useState<number>(0);
    const [afterConstructionValue, setAfterConstructionValue] = useState<number>(0);

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
                    <span>Under Writing</span>
                </Button>

                {/* <Button
                    variant="ghost"
                    className={`flex items-center gap-2 ${activeTab === 'Renovation' ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
                    onClick={() => setActiveTab('Renovation')}
                >
                    <Calculator className="h-4 w-4" />
                    <span>New Construction</span>
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
                {activeTab === 'New Construction' && <UnderWritingComponent
                    architecturalDesignFees={architecturalDesignFees} setArchitecturalDesignFees={setArchitecturalDesignFees}
                    landRealEstateCosts={landRealEstateCosts} setLandRealEstateCosts={setLandRealEstateCosts}
                    loanInterestAccountingFees={loanInterestAccountingFees} setLoanInterestAccountingFees={setLoanInterestAccountingFees}
                    hardMoney={hardMoney} setHardMoney={setHardMoney}
                    investorMoney={investorMoney} setInvestorMoney={setInvestorMoney}
                    investorEquity={investorEquity} setInvestorEquity={setInvestorEquity}
                    loanAmountHM={loanAmountHM} setLoanAmountHM={setLoanAmountHM}
                    loanAmountIM={loanAmountIM} setLoanAmountIM={setLoanAmountIM}
                    equity={equity} setEquity={setEquity}
                    pointsHM={pointsHM} setPointsHM={setPointsHM}
                    pointsIM={pointsIM} setPointsIM={setPointsIM}
                    arpHM={arpHM} setArpHM={setArpHM}
                    arpIM={arpIM} setArpIM={setArpIM}
                    adminFeesHM={adminFeesHM} setAdminFeesHM={setAdminFeesHM}
                    amortization={amortization} setAmortization={setAmortization}
                    finish={finish} setfinish={setfinish}
                    landAsking={landAsking} setLandAsking={setLandAsking}
                    zoningRight={zoningRight} setZoningRight={setZoningRight}
                    sqft={sqft} setSqft={setSqft}
                    salesComps={salesComps} setSalesComps={setSalesComps}
                    rentalComps={rentalComps} setRentalComps={setRentalComps}
                    unitsProposed={unitsProposed} setUnitsProposed={setUnitsProposed}
                    realtorCommission={realtorCommission} setRealtorCommission={setRealtorCommission}
                    closingCost={closingCost} setClosingCost={setClosingCost}
                    afterConstructionValue={afterConstructionValue} setAfterConstructionValue={setAfterConstructionValue}
                />}
                {activeTab === 'Renovation' && <div>Budget Content</div>}
                {activeTab === 'project-management' && <div>Project Management Content</div>}
                {activeTab === 'gis-map' && <div>GIS Map Content</div>}
            </div>
        </div>
    )
}