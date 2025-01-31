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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    frontSetBack: z.string(),
    sideSetBack: z.string(),
    rearSetBack: z.string(),
    coverageRatio: z.string(),
    maxHeight: z.string(),
    planset: z.string()
});

export default function ZoningDistrictComponent() {

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

                <div className="mt-10">
                    <p className="pb-2 text-lg font-semibold">Zoing District Planning</p>
                    <Separator />
                </div>
                <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="frontSetBack"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Front setback (ft.)</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="sideSetBack"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Side setback (ft.)</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="rearSetBack"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rear setback (ft.)</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="coverageRatio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Coverage Ratio (%)</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="maxHeight"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Max Height (ft.)</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="planset"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Will the proposed planset work?</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
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