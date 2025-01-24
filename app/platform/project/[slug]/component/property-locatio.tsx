// PropertyLocation.tsx
// import { Button } from "@/components/ui/button"
import {
    // Copy,
    // Map as MapIcon,
    // Globe,
    // Printer,
} from "lucide-react"

interface PropertyLocationProps {
    address: string
    city: string
    state: string
    zipCode: string
    county: string
}

export function PropertyLocation({
    address,
    city,
    state,
    zipCode,
    county
}: PropertyLocationProps) {
    return (
        <div>
            <div className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{address}</h2>
                    {/* <div className="flex gap-2">
                        <Button variant="ghost" size="icon" title="Copy">
                            <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Open in Maps">
                            <MapIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Open in Browser">
                            <Globe className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Print">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div> */}
                </div>
            </div>
            <div>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span>{city}, {state} {zipCode}</span>
                        <span className="text-muted-foreground">|</span>
                        <span>{county} County</span>
                    </div>

                    {/* <div className="space-y-2">
                        <h3 className="font-medium">Dallas, TX Links</h3>
                        <div className="space-y-1">
                            <Link
                                href="https://msc.fema.gov/portal/search"
                                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                                target="_blank"
                            >
                                <ExternalLink className="h-4 w-4" />
                                FEMA Portal Search
                                <span className="text-gray-500">(1)</span>
                            </Link>
                            <Link
                                href="https://developmentweb.dallascityhall.com/publiczoningweb/"
                                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                                target="_blank"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Dallas City Hall Public Zoning Web
                                <span className="text-gray-500">(13)</span>
                            </Link>
                        </div>
                    </div> */}

                    {/* <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium">Zoning / Overlays</h3>
                        </div>
                        <div className="rounded-lg border p-3">
                            R-7.5
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium">Flood Zone</h3>
                        </div>
                        <div className="rounded-lg border p-3">
                            None
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}