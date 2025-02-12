"use client"

import FinalClosing from "./components/underWriting/finalClosing"
import UnderWritingFinishLevelComponent from "./components/underWriting/finishLevel"
import PropertyDetailComponent from "./components/underWriting/propertyDetails"
import SoftCostComponent from "./components/underWriting/softCost"
import UnderWritingFinacingComponent from "./components/underWriting/underWritingFinancing"
import UnderWritingReport from "./components/underWriting/underWritingReport"


export default function UnderWritingComponent() {

    return (

        <>
            <div className="flex gap-7 pb-10">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12">

                        <PropertyDetailComponent />

                        <SoftCostComponent />

                        <UnderWritingFinishLevelComponent />

                        <UnderWritingFinacingComponent />

                        <FinalClosing />

                    </div>

                    <div className="col-span-0 text-gray-600 p-4 fixed bg-slate-50 border-4 border-gray rounded-lg right-0 bottom-0 mt-64 lg:mr-20 mr-10 mb-4">
                        <div className="w-80">
                            <h2 className="text-xl font-semibold">Under Writing Report</h2>
                            <UnderWritingReport />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}