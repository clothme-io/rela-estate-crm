/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState, useRef } from "react"
import { useLoadScript } from "@react-google-maps/api"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function NewProjectDialog() {

    const [input, setIput] = useState({});
    const inputRef = useRef<HTMLInputElement>(null);

    const libraries: any = ["places"]
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries,
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setIput((values) => ({ ...values, [name]: value }));
    }

    const handlePlaceChanged = async (address) => {
        if (!isLoaded) return;
        const place = address.getPlace();

        if (!place || !place.geometry) {
            setIput({});
            return;
        }

        formData(place);
    }

    const formData = (data) => {
        const addressComponents = data?.address_components;

        const componentMap = {
            subPremise: "",
            premise: "",
            street_number: "",
            route: "",
            country: "long_name",
            postal_code: "short_name",
            administrative_area_level_1: "",
            administrative_area_level_2: "",
        }

        for (const component of addressComponents) {
            const componentType = component.types[0] as keyof typeof componentMap;
            if (componentMap.hasOwnProperty(componentType)) {
                componentMap[componentType] = component.long_name;
            }
        }

        const formattedAddress = `${componentMap.street_number} ${componentMap.route}`;
    }

    useEffect(() => {
        if (!isLoaded || loadError) {

            const options = {
                componentRestrictions: { country: "us" },
                fields: ["address_components", "geometry"],
            }
            if (inputRef.current) {
                const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
                autocomplete.addListener("place_changed", () => handleChange(autocomplete));
            }
        }
    }, [isLoaded, loadError]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8">
                    <Plus className="mr-2 h-4 w-4" />
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Create New Project
                    </DialogTitle>
                    <DialogDescription>
                        Add address of property to start.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Enter address
                        </Label>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Sumbit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
