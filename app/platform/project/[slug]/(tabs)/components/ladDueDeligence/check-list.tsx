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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Textarea
} from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    newContructionOnBlock: z.string(),
    housesOnEitherSide: z.string(),
    fireManholeWater: z.string(),
    historicStructures: z.string(),
    abnormalTopography: z.string(),
    largeNumberOfTrees: z.string(),
    anythingElse: z.string()
});

export default function CheckListComponent() {

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-10 pb-32">

                <div className="mt-10">
                    <p className="pb-2">Visual Checks</p>
                    <Separator />
                </div>

                <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="newContructionOnBlock"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Is there a new construction on the block?</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="housesOnEitherSide"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Are there houses on either side?</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="fireManholeWater"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Are there fire hudrants, manholdes, water meters nearby?</FormLabel>
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

                <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="historicStructures"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>In historical street view, were there previous structures?</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="abnormalTopography"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Abnormal topography?</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="largeNumberOfTrees"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Large number of trees?</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="SSelect an option..." />
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


                <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="anythingElse"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Anything else</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder=""
                                            className=""
                                            {...field}
                                        />
                                    </FormControl>
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