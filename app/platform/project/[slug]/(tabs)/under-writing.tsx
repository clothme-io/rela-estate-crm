"use client"

import UnderWritingFinishLevelComponent from "./components/underWriting/finishLevel"
import PropertyDetailComponent from "./components/underWriting/propertyDetails"
import SoftCostComponent from "./components/underWriting/softCost"
import UnderWritingReport from "./components/underWriting/underWritingReport"


export default function UnderWritingComponent() {

    return (

        <>
            <div className="flex-1 flex gap-7 pb-10">
                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-8">

                        <PropertyDetailComponent />

                        <SoftCostComponent />

                        <UnderWritingFinishLevelComponent />

                    </div>

                    <div className="col-span-4 text-gray-600 p-4 fixed border-4 border-gray rounded-lg right-0 bottom-0 mt-64 mr-44 mb-4">
                        <div className="w-96">
                            <h2 className="text-xl font-semibold">Under Writing Report</h2>
                            <UnderWritingReport />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}