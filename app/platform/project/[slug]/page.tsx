// import { useRouter } from 'next/navigation'
import { DashboardTabs } from "./component/tab"
import { PropertyLocation } from "./component/property-locatio"

export default function Page() {

    // const router = useRouter()

    return (
        <div className="">

            <main className="min-h-screen">
                <div className="md:px-20 lg:px-48 pt-16 pb-6">

                    <div className="pb-10">
                        <PropertyLocation
                            address="6620 South Lancaster Road"
                            city="Dallas"
                            state="TX"
                            zipCode="75241"
                            county="Dallas"
                        />
                    </div>
                    <DashboardTabs />
                </div>
            </main>

        </div>
    )
}

