/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import React, { useEffect, useState, useRef, useCallback } from "react"
import { useLoadScript } from "@react-google-maps/api"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
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
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    // FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    name_0296298989: z.string(),
    name_4959118455: z.string(),
    name_1263799749: z.string(),
    name_7929842234: z.string(),
    name_4642882506: z.string(),
    name_3920761924: z.string()
});

export function NewProjectDialog() {

    const [input, setInput] = useState({});
    const [notLoaded, setLoaded] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    const libraries: any = ["places"]
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries,
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    const handlePlaceChanged = useCallback(async (address: any) => {
        if (!isLoaded) return;
        const place = address.getPlace();

        if (!place || !place.geometry) {
            setInput({});
            return;
        }

        formData(place);
    }, [isLoaded]);

    const formData = (data: { address_components: any; geometry: { location: { lat: () => any; lng: () => any } } }) => {
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

        const formattedAddress = `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();

        const latitude = data?.geometry?.location?.lat();
        const longitude = data?.geometry?.location?.lng();

        setInput((values: any) => ({
            ...values,
            streetAddress: formattedAddress,
            country: componentMap.country,
            zipCode: componentMap.postal_code,
            city: componentMap.administrative_area_level_2,
            state: componentMap.administrative_area_level_1,
            latitude,
            longitude,
        }));
    }

    useEffect(() => {
        if (!isLoaded || loadError) {

            const options = {
                componentRestrictions: { country: "us" },
                fields: ["address_components", "geometry"],
            }
            if (inputRef.current) {
                const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
                autocomplete.addListener("place_changed", () => handlePlaceChanged(autocomplete));
            }
        }
    }, [handlePlaceChanged, isLoaded, loadError]);

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
                        <Input id="username" value="" className="col-span-3" />
                    </div>
                </div>

                {notLoaded && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-3xl mx-auto py-4">

                            <div className="grid grid-cols-12 gap-4">

                                <div className="col-span-6">

                                    <FormField
                                        control={form.control}
                                        name="name_0296298989"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Street Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        disabled
                                                        type=""
                                                        {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="col-span-6">

                                    <FormField
                                        control={form.control}
                                        name="name_4959118455"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Alternative Street Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        disabled
                                                        type=""
                                                        {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>

                            <div className="grid grid-cols-12 gap-4">

                                <div className="col-span-6">

                                    <FormField
                                        control={form.control}
                                        name="name_1263799749"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>City</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        disabled
                                                        type=""
                                                        {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="col-span-6">

                                    <FormField
                                        control={form.control}
                                        name="name_7929842234"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>State</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        disabled
                                                        type=""
                                                        {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>

                            <div className="grid grid-cols-12 gap-4">

                                <div className="col-span-6">

                                    <FormField
                                        control={form.control}
                                        name="name_4642882506"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Country</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        disabled
                                                        type=""
                                                        {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="col-span-6">

                                    <FormField
                                        control={form.control}
                                        name="name_3920761924"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Zip Code</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        disabled
                                                        type=""
                                                        {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>
                        </form>
                    </Form>
                )}
                <DialogFooter>
                    <Button type="submit">Sumbit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
