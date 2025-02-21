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
    sideWidth: number;
    setSideWidth: (value: number) => void;
    sideDepth: number;
    setsideDepth: (value: number) => void;
    area: number;
    setarea: (value: number) => void;
    lot: number;
    setlot: (value: number) => void;
    block: number;
    setblock: (value: number) => void;
    // deedTransfer: z.coerce.date(),
    frequentlyTraded: string;
    setfrequentlyTraded: (value: string) => void;

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

            <AppraisalComponent
                sideWidth={props.sideWidth} setSideWidth={props.setSideWidth}
                sideDepth={props.sideDepth} setsideDepth={props.setsideDepth}
                area={props.area} setarea={props.setarea}
                lot={props.lot} setlot={props.setlot}
                block={props.block} setblock={props.setblock}
                frequentlyTraded={props.frequentlyTraded} setfrequentlyTraded={props.setfrequentlyTraded} />

            <ZoningUseComponent />

            <ZoningDistrictComponent />

            <CheckListComponent />

        </div>
    )

}