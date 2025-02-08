"use client"


import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    landAsking: z.string(),
    zoningRight: z.string(),
    sqft: z.string(),
    salesComps: z.string(),
    rentalComps: z.string(),
    unitsProposed: z.string()
});

export default function PropertyDetailComponent() {

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

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-10">

                    <div className="mt-2">
                        <p className="pb-2 text-lg font-semibold">Details</p>
                        <Separator />
                    </div>

                    <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="landAsking"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Land Asking Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="zoningRight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type of Zoning Allowed</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="sqft"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Build SqFT</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="unitsProposed"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Prposed Units</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="salesComps"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sales Comps</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="rentalComps"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rental Comps</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>
                </form>
            </Form>
        </>
    )
}