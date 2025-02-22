"use client"

import { Button } from "@/components/ui/button"
import FinalClosing from "./components/underWriting/finalClosing"
import UnderWritingFinishLevelComponent from "./components/underWriting/finishLevel"
import PropertyDetailComponent from "./components/underWriting/propertyDetails"
import SoftCostComponent from "./components/underWriting/softCost"
import UnderWritingFinacingComponent from "./components/underWriting/underWritingFinancing"
import UnderWritingReport from "./components/underWriting/underWritingReport"
import { Printer } from "lucide-react"

export interface UnderWritingProps {
    architecturalDesignFees: number;
    setArchitecturalDesignFees: (value: number) => void;
    landRealEstateCosts: number;
    setLandRealEstateCosts: (value: number) => void;
    loanInterestAccountingFees: number;
    setLoanInterestAccountingFees: (value: number) => void;
    hardMoney: boolean;
    setHardMoney: (value: boolean) => void;
    investorMoney: boolean;
    setInvestorMoney: (value: boolean) => void;
    investorEquity: boolean;
    setInvestorEquity: (value: boolean) => void;
    loanAmountHM: number;
    setLoanAmountHM: (value: number) => void;
    loanAmountIM: number;
    setLoanAmountIM: (value: number) => void;
    equity: number;
    setEquity: (value: number) => void;
    pointsHM: number;
    setPointsHM: (value: number) => void;
    pointsIM: number;
    setPointsIM: (value: number) => void;
    arpHM: number;
    setArpHM: (value: number) => void;
    arpIM: number;
    setArpIM: (value: number) => void;
    adminFeesHM: number;
    setAdminFeesHM: (value: number) => void;
    amortization: number;
    setAmortization: (value: number) => void;

    //
    finish: number;
    setfinish: (value: number) => void;

    // 
    landAsking: number;
    setLandAsking: (value: number) => void;
    zoningRight: number;
    setZoningRight: (value: number) => void;
    sqft: number;
    setSqft: (value: number) => void;
    salesComps: number;
    setSalesComps: (value: number) => void;
    rentalComps: number;
    setRentalComps: (value: number) => void;
    unitsProposed: number;
    setUnitsProposed: (value: number) => void;

    // 
    realtorCommission: number;
    setRealtorCommission: (value: number) => void;
    closingCost: number;
    setClosingCost: (value: number) => void;
    afterConstructionValue: number;
    setAfterConstructionValue: (value: number) => void;
}

export default function UnderWritingComponent(props: UnderWritingProps) {

    return (

        <>
            {/* <div className="flex gap-7 pb-10"> */}
            <div className="flex flex-row-reverse">
                <Button variant="ghost" size="icon" title="Print">
                    <Printer className="h-4 w-4" />
                </Button>
            </div>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">

                    <PropertyDetailComponent
                        landAsking={props.landAsking}
                        setLandAsking={props.setLandAsking}
                        zoningRight={props.zoningRight}
                        setZoningRight={props.setZoningRight}
                        sqft={props.sqft}
                        setSqft={props.setSqft}
                        salesComps={props.salesComps}
                        setSalesComps={props.setSalesComps}
                        rentalComps={props.rentalComps}
                        setRentalComps={props.setRentalComps}
                        unitsProposed={props.unitsProposed}
                        setUnitsProposed={props.setUnitsProposed}
                    />

                    <SoftCostComponent
                        architecturalDesignFees={props.architecturalDesignFees}
                        setArchitecturalDesignFees={props.setArchitecturalDesignFees}
                        landRealEstateCosts={props.landRealEstateCosts}
                        setLandRealEstateCosts={props.setLandRealEstateCosts}
                        loanInterestAccountingFees={props.loanInterestAccountingFees}
                        setLoanInterestAccountingFees={props.setLoanInterestAccountingFees}
                    />

                    <UnderWritingFinishLevelComponent
                        finish={props.finish}
                        setfinish={props.setfinish}
                    />

                    <UnderWritingFinacingComponent
                        hardMoney={props.hardMoney}
                        setHardMoney={props.setHardMoney}
                        investorMoney={props.investorMoney}
                        setInvestorMoney={props.setInvestorMoney}
                        investorEquity={props.investorEquity}
                        setInvestorEquity={props.setInvestorEquity}
                        loanAmountHM={props.loanAmountHM}
                        setLoanAmountHM={props.setLoanAmountHM}
                        loanAmountIM={props.loanAmountIM}
                        setLoanAmountIM={props.setLoanAmountIM}
                        equity={props.equity}
                        setEquity={props.setEquity}
                        pointsHM={props.pointsHM}
                        setPointsHM={props.setPointsHM}
                        pointsIM={props.pointsIM}
                        setPointsIM={props.setPointsIM}
                        arpHM={props.arpHM}
                        setArpHM={props.setArpHM}
                        arpIM={props.arpIM}
                        setArpIM={props.setArpIM}
                        adminFeesHM={props.adminFeesHM}
                        setAdminFeesHM={props.setAdminFeesHM}
                        amortization={props.amortization}
                        setAmortization={props.setAmortization}
                    />

                    <FinalClosing
                        realtorCommission={props.realtorCommission}
                        setRealtorCommission={props.setRealtorCommission}
                        closingCost={props.closingCost}
                        setClosingCost={props.setClosingCost}
                        afterConstructionValue={props.afterConstructionValue}
                        setAfterConstructionValue={props.setAfterConstructionValue}
                    />

                </div>

                <div className="col-span-0 text-gray-600 p-4 fixed bg-slate-50 border-4 border-gray rounded-lg right-0 bottom-0 mt-64 lg:mr-10 mr-10 mb-4">
                    <div className="w-80">
                        <h2 className="text-xl font-semibold">Under Writing Report</h2>
                        <UnderWritingReport />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}