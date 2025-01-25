import AppraisalComponent from "./components/ladDueDeligence/appraisal";
import CheckListComponent from "./components/ladDueDeligence/check-list";
import GISComponent from "./components/ladDueDeligence/gisComponent";
import ZoningDistrictComponent from "./components/ladDueDeligence/zoning-district";
import ZoningUseComponent from "./components/ladDueDeligence/zoning-use";


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