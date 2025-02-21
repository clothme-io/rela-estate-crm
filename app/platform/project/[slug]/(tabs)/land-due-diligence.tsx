import AppraisalComponent from "./components/landDueDeligence/appraisal";
import CheckListComponent from "./components/landDueDeligence/check-list";
import GISComponent from "./components/landDueDeligence/gisComponent";
import ZoningDistrictComponent from "./components/landDueDeligence/zoning-district";
import ZoningUseComponent from "./components/landDueDeligence/zoning-use";

export interface LandDueDiligenceProps {
    zoning: number;
    setZoning: (value: number) => void;
    floodZone: string;
    setfloodZone: (value: string) => void;
    pdOverlayDistrict: string;
    setpdOverlayDistrict: (value: string) => void;

    //
    sideWidth: string;
    setSideWidth: (value: string) => void;
    sideDepth: string;
    setsideDepth: (value: string) => void;
    area: string;
    setarea: (value: string) => void;
    lot: string;
    setlot: (value: string) => void;
    block: string;
    setblock: (value: string) => void;
    // deedTransfer: z.coerce.date(),
    frequentlyTraded: string;
    setfrequentlyTraded: (value: string) => void;

    //
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

export default function LandDueDiligence(props: LandDueDiligenceProps) {

    return (
        <div className="">

            <GISComponent
                zoning={props.zoning}
                setZoning={props.setZoning}
                floodZone={props.floodZone}
                setfloodZone={props.setfloodZone}
                pdOverlayDistrict={props.pdOverlayDistrict}
                setpdOverlayDistrict={props.setpdOverlayDistrict}
            />

            <AppraisalComponent />

            <ZoningUseComponent />

            <ZoningDistrictComponent />

            <CheckListComponent />

        </div>
    )

}