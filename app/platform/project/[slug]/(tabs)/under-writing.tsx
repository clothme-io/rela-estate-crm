"use client"

import PropertyDetailComponent from "./components/underWriting/propertyDetails"
import SoftCostComponent from "./components/underWriting/softCost"
import { Separator } from "@/components/ui/separator"


export default function UnderWritingComponent() {

    return (
        <div className="">

            <PropertyDetailComponent />
            <Separator className="my-10" />
            <SoftCostComponent />

        </div>
    )
}