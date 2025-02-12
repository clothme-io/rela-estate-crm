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

const formSchema = z.object({
    zoning: z.string(),
    flood_zone: z.string()
});

export default function GISComponent() {

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
                                            {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="flood_zone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Flood Zone</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {/* <FormDescription>You can manage email addresses in your email settings.</FormDescription> */}
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