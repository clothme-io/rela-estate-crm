"use client"

import FinalClosing from "./components/underWriting/finalClosing"
import UnderWritingFinishLevelComponent from "./components/underWriting/finishLevel"
import PropertyDetailComponent from "./components/underWriting/propertyDetails"
import SoftCostComponent from "./components/underWriting/softCost"
import UnderWritingFinacingComponent from "./components/underWriting/underWritingFinancing"
import UnderWritingReport from "./components/underWriting/underWritingReport"

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
}

export default function UnderWritingComponent(props: UnderWritingProps) {

    return (

        <>
            {/* <div className="flex gap-7 pb-10"> */}
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">

                    <PropertyDetailComponent />

                    <SoftCostComponent
                        architecturalDesignFees={props.architecturalDesignFees}
                        setArchitecturalDesignFees={props.setArchitecturalDesignFees}
                        landRealEstateCosts={props.landRealEstateCosts}
                        setLandRealEstateCosts={props.setLandRealEstateCosts}
                        loanInterestAccountingFees={props.loanInterestAccountingFees}
                        setLoanInterestAccountingFees={props.setLoanInterestAccountingFees}
                    />

                    <UnderWritingFinishLevelComponent />

                    <UnderWritingFinacingComponent
                        hardMoney={props.hardMoney}
                        setHardMoney={props.setHardMoney}
                        investorMoney={props.investorMoney}
                        setInvestorMoney={props.setInvestorMoney}
                        investorEquity={false}
                        setInvestorEquity={ }
                        loanAmountHM={0}
                        setLoanAmountHM={ }
                        loanAmountIM={0}
                        setLoanAmountIM={ }
                        equity={0}
                        setEquity={ }
                        pointsHM={0}
                        setPointsHM={ }
                        pointsIM={0}
                        setPointsIM={ }
                        arpHM={0}
                        setArpHM={ }
                        arpIM={0}
                        setArpIM={ }
                        adminFeesHM={0}
                        setAdminFeesHM={ }
                        amortization={0}
                        setAmortization={ }
                    />

                    <FinalClosing />

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