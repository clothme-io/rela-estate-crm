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
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export interface GISComponentProps {
    zoning: number;
    setZoning: (value: number) => void;
    floodZone: string;
    setfloodZone: (value: string) => void;
    pdOverlayDistrict: string;
    setpdOverlayDistrict: (value: string) => void;
}

const formSchema = z.object({
    zoning: z.number(),
    floodZone: z.string(),
    pdOverlayDistrict: z.string()
});

export default function GISComponent({
    zoning,
    setZoning,
    floodZone,
    setfloodZone,
    pdOverlayDistrict,
    setpdOverlayDistrict
}: GISComponentProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            zoning: zoning,
            floodZone: floodZone,
            pdOverlayDistrict: pdOverlayDistrict
        }
    });

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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-10">

                <div className="mt-2">
                    <p className="pb-2 text-lg font-semibold">GIS Map</p>
                    <Separator />
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Dallas, TX Links</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a target="_blank" href="https://www.dallascad.org/">
                            <p className="text-blue-500">
                                https://www.dallascad.org/
                            </p>
                        </a>
                    </CardContent>
                    <CardFooter>
                        <a target="_blank" href="https://dallascityhall.com/departments/sustainabledevelopment/planning/Pages/zoning-districts.aspx">
                            <p className="text-blue-500">
                                https://dallascityhall.com/departments/sustainabledevelopment/planning/Pages/zoning-districts.aspx
                            </p>
                        </a>
                    </CardFooter>
                </Card>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="zoning"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Zoning</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            type=""
                                            {...field}
                                            onChange={(e) => {
                                                setZoning(e.currentTarget.value.length);
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="floodZone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Flood Zone</FormLabel>
                                    <Select onValueChange={(e) => {
                                        setfloodZone(e)
                                        field.onChange(e)
                                    }} defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="yes">100 years</SelectItem>
                                            <SelectItem value="no">500 years</SelectItem>
                                            <SelectItem value="no">1000 years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="pdOverlayDistrict"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PD Overlay District</FormLabel>
                                    <Select onValueChange={(e) => {
                                        setpdOverlayDistrict(e)
                                        field.onChange(e)
                                    }} defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" defaultValue={field.value} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="yes">Years</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </div>
            </form>
        </Form>
    )
}