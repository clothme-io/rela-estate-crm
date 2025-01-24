// import { useRouter } from 'next/navigation'
import { DashboardTabs } from "./component/tab"
import { PropertyLocation } from "./component/property-locatio"

export default function Page() {

    // const router = useRouter()

    return (
        <div className="px-20">
            {/* <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"> */}

            <PropertyLocation
                address="6620 South Lancaster Road"
                city="Dallas,"
                state="TX"
                zipCode="75241"
                county="Dallas"
            />
            {/* </header> */}

            <main className="min-h-screen">
                <DashboardTabs />
            </main>
        </div>
    )
}

