import AppraisalComponent from "./components/landDueDeligence/appraisal";
import CheckListComponent from "./components/landDueDeligence/check-list";
import GISComponent from "./components/landDueDeligence/gisComponent";
import ZoningDistrictComponent from "./components/landDueDeligence/zoning-district";
import ZoningUseComponent from "./components/landDueDeligence/zoning-use";


export default function LandDueDiligence() {

    return (
        <div className="">

            <GISComponent />

            <AppraisalComponent />

            <ZoningUseComponent />

            <ZoningDistrictComponent />

            <CheckListComponent />

        </div>
    )

}